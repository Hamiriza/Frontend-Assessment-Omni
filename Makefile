IMAGE_URL := react-assessment-01:latest

start:
	docker build -t $(IMAGE_URL) .
	docker run -it \
		--publish 8080:8080 \
		--volume $$(pwd)/server.json:/app/server.json \
		--volume $$(pwd)/routes.json:/app/routes.json \
		$(IMAGE_URL)
