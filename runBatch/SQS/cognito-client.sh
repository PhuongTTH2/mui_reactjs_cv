#!/bin/bash

env="prod"
export AWS_PROFILE="deploy-$env"

userPoolId=""
userPoolClientIds=(
    # app_client
    ""
    # app_clientWeb
    ""
)

for userPoolClientId in "${userPoolClientIds[@]}"
do
    echo "update-user-pool-client to clientId: $userPoolClientId"
aws cognito-idp update-user-pool-client \
--user-pool-id ${userPoolId}  \
--client-id ${userPoolClientId}  \
--callback-urls \
    "http://localhost:3000/" \
   
--logout-urls \
    "http://localhost:3000/" \
    
--explicit-auth-flows ALLOW_ADMIN_USER_PASSWORD_AUTH ALLOW_CUSTOM_AUTH ALLOW_REFRESH_TOKEN_AUTH ALLOW_USER_SRP_AUTH \
--supported-identity-providers "COGNITO" "air" \
--allowed-o-auth-flows "code" \
--allowed-o-auth-scopes "aws.cognito.signin.user.admin" "openid" "profile" \
--allowed-o-auth-flows-user-pool-client \
--prevent-user-existence-errors LEGACY

done
