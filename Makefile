# PROD_IMG_TAG := 373782272813.dkr.ecr.us-east-1.amazonaws.com/dev/thingstocook:latest
IMG_TAG := dev/thingstocook
APP_NAME := thingstocook
BRANCH := dev
IMG_PROD_TAG := 373782272813.dkr.ecr.us-east-1.amazonaws.com/dev/thingstocook:latest


# First target is always the default rule.
help:
	@echo "Available target rules"
	@echo
	@echo "build              Build docker image locally"
	@echo "start              Runs the application container"
	@echo "stop               Stops the application container"
	@echo "restart            Restarts the application container"
	@echo "logs               Follow application logs"
	@echo "test               Runs tests inside the application container"

push:
	$(info Pushing changes to $(BRANCH))
	@git push origin $(BRANCH)

build: ./Dockerfile
	$(info Building docker image)
	@docker build --tag $(IMG_TAG) .

start:
	$(info Running application container open it on localhost:4242)
	@docker run -p 8080:8080 --name $(APP_NAME) -d $(IMG_TAG)

stop:
	$(info Stopping application container)
	@docker rm --force $(APP_NAME)

restart: stop start

logs:
	@docker logs --tail 50 --follow $(APP_NAME)

test:
	$(info Running application tests)
	@docker run --name $(APP_NAME)-test -d $(IMG_TAG) 
	@docker exec -it $(APP_NAME)-test npm test
	@docker stop $(APP_NAME)-test && docker rm $(APP_NAME)-test

deploy:  
	$(info Running deploy in ECR)
	@docker docker build -t $(IMG_TAG) . \
		&& docker tag $(IMG_TAG):latest $(IMG_PROD_TAG) \
		&& docker push $(IMG_PROD_TAG) 
