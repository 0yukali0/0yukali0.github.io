DOCKER = docker
.PHONY: image
image:
	@echo "build image"
	$(DOCKER) build -t demo:test -f docker/Dockerfile .