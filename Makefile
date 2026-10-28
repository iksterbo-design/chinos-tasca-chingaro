.PHONY: install dev test lint format docker-up pages

install:
	npm install

dev:
	npm run dev

test:
	npm test

lint:
	npm run lint

format:
	npm run format

docker-up:
	docker build -t chinos-tasca . && docker run -p 3000:3000 chinos-tasca

pages:
	@echo "Push to main triggers GitHub Pages deploy"
