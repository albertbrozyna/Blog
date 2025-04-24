FROM openjdk:23-jdk-slim

ENV JAVA_OPTS="-Djava.security.egd=file:/dev/./urandom"


COPY SpringApp-0.0.1.jar app.jar

ENTRYPOINT ["java", "-jar", "/app.jar"]

EXPOSE 8080