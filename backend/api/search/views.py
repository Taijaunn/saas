"""
A module that contains the search views.

Classes:
    - `SearchAPI`: A class that hold the endpoint of searching Instagram accounts.
"""

import requests
from decouple import config
from rest_framework import views, status
from rest_framework.response import Response


class SearchAPI(views.APIView):
    """API View for searching Instagram accounts by username.

    This class handles GET requests to search Instagram accounts by username.

    Methods:
        - `get(request)`: Handles GET requests and performs the search.
    """

    def get(self, request):
        """Perform Instagram search and return a JSON response with result.

        Args:
            request: HTTP request containing the Instagram username as a query parameter.

        Returns:
            JSON Response with status code, message, and ig_user (Instagram User).
        """
        query = request.GET.get('q')

        base_url = "https://graph.facebook.com/v16.0"

        filters = "{name,username,website,biography,id,ig_id,profile_picture_url,followers_count,follows_count,media_count,media{id,caption,comments_count,like_count,media_product_type,media_type,media_url,permalink,owner,timestamp,username}}"
        fields = f"business_discovery.username({query}){filters}"

        ig_user_id = config("FACEBOOK_IG_ID")
        access_token = config("FACEBOOK_ACCESS_TOKEN")

        search_url = f"{base_url}/{ig_user_id}/?fields={fields}&access_token={access_token}"
        search_response = requests.get(search_url)
        search_payload = search_response.json()

        if 'error' in search_payload:
            return Response({
                "status": status.HTTP_404_NOT_FOUND,
                "message": search_payload['error']['error_user_msg'],
            })

        return Response({
            "status": status.HTTP_200_OK,
            "message": f"Your query is successful!",
            "ig_user": search_payload['business_discovery']
        })
