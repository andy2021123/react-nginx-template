ifneq ($(wildcard .env),) 
	include .env
endif

CLIENT_PORT ?= 3000
APP_URL ?= example.com

ifeq ($(wildcard /var/www/),)
	BUILD := @echo The folder "/var/www" doesn't exist. If you want to deploy the app to a container instead, use "make deploy"
else
	BUILD := sudo rm -rf /var/www/$(APP_URL) && sudo cp -rT dist /var/www/$(APP_URL)
endif


.PHONY: up down logs update deploy build

up:
	docker compose up development -d
	make logs

down:
	docker compose down

logs:
	docker compose logs --follow --tail 10

update:
	docker compose build production

deploy:
	docker compose up production -d
	@echo listening at: http://localhost:$(CLIENT_PORT)
	make logs

build:
	@npm install
	@npm run build
	$(BUILD)
