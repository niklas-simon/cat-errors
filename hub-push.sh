docker login
docker buildx build --push --platform linux/arm64,linux/amd64 -t gewuerznud3l/cat-errors:latest .