DOCKER = docker
.PHONY: build
build:
	@echo "build node pkg"
	npm ci && npm run build

.PHONY: image
image:
	@echo "build image"
	$(DOCKER) build -t demo:test -f docker/Dockerfile .