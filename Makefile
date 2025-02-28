docker-up: docker-down
	docker compose -f docker-compose.yml up --build -d
  

docker-down:
	docker compose -f docker-compose.yml stop
	docker compose -f docker-compose.yml down

node-console:
	docker compose -f docker-compose.yml exec  node sh -c "/bin/bash"








