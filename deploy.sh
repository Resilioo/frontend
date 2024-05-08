# This script is used to deploy the application to AWS S3 and invalidate the CloudFront cache.
currentBranch=$(git branch --show-current);
echo "Current Branch: $currentBranch";
if [ $currentBranch != "development" ]
then
    echo "Invalid branch checked out for this main"
    exit 2;
fi
git fetch
local=$(git rev-parse $currentBranch);
remote=$(git rev-parse origin/$currentBranch);
echo "Local: $local";
echo "Remote: $remote";
if [ $local != $remote ]
then
    echo "Make sure your local branch that has been selected for deployment is the same as the remote branch."
    exit 2;
fi
cp envs/.env.prod .env
npm install
npm run build:prod
aws s3 sync  --profile resilio ./dist s3://resilio-website-bucket
aws cloudfront create-invalidation --profile resilio --distribution-id E2PXJSG5CY7DIF --paths "/*"
cp envs/.env.local .env
# Replace with your own configs, [aws-configs-profile-name], [bucket-name], [id]