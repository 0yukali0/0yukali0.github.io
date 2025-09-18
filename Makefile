DOCKER = docker
.PHONY: build
build:
	@echo "build node pkg"
	npm ci && npm run build

.PHONY: image
image:
	@echo "build image"
	$(DOCKER) build -t demo:test -f docker/Dockerfile .
.PHONY: run
run:
	docker run -p 30000:3000 demo:test

.PHONY: local
local:
	npm ci && npm run build
	npm run serve