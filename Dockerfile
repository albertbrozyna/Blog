# Użyj oficjalnego obrazu Javy jako bazy
FROM openjdk:23-jdk-slim

# Ustaw zmienną środowiskową, aby Java nie generowała niepotrzebnych plików tymczasowych
ENV JAVA_OPTS="-Djava.security.egd=file:/dev/./urandom"

# Skopiuj plik .jar do kontenera
COPY SpringApp.jar app.jar

# Określ polecenie do uruchomienia aplikacji Spring Boot
ENTRYPOINT ["java", "-jar", "/app.jar"]

# Ustaw port, na którym aplikacja Spring Boot będzie nasłuchiwać
EXPOSE 8085