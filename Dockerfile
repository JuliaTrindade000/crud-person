# Use a imagem base do OpenJDK
FROM openjdk:17-jdk-slim

# Copie o arquivo JAR da aplicação para o contêiner
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} app.jar

# Instale o utilitário 'wait-for-it' diretamente no contêiner
COPY wait-for-db.sh /wait-for-db.sh
RUN chmod +x /wait-for-db.sh

# Use 'wait-for-it' para aguardar o MySQL
CMD ["/wait-for-db.sh", "--", "java", "-jar", "/app.jar"]
