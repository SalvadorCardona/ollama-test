DOCKER_COMPOSE = docker-compose
OLLAMA = $(DOCKER_COMPOSE) exec ollama

install-llama-model:
	$(OLLAMA) ollama run llama3

install-mistral-model:
	$(OLLAMA) ollama run mistrallite

install-llama-tiny-model:
	$(OLLAMA) ollama run tinyllama