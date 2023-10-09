from django.http import JsonResponse
from django.contrib.auth.decorators import login_required

# This view is for testing if the user is authenticated
@login_required
def check_user(request):
    return JsonResponse({'message': 'You are authenticated'})

# This view will automatically be used by python-social-auth to handle the login
def google_login(request):
    user = request.user
    if user.is_authenticated:
        # You can access Google user info in user.social_auth.get(provider='google')
        google_user = user.social_auth.get(provider='google')
        google_info = {
            'uid': google_user.uid,
            'extra_data': google_user.extra_data
        }
        return JsonResponse({'message': 'Logged in via Google', 'google_info': google_info})
    else:
        return JsonResponse({'message': 'Not authenticated'}, status=401)
