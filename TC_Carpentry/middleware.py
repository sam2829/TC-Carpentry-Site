from django.utils.deprecation import MiddlewareMixin

class CrossOriginPolicyMiddleware(MiddlewareMixin):
    def process_response(self, request, response):
        response["Cross-Origin-Opener-Policy"] = "same-origin"
        response["Cross-Origin-Embedder-Policy"] = "same-origin"
        return response