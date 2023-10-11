#!/bin/bash
# Espera por 30 segundos antes de continuar
sleep 30
# Execute o comando real para iniciar o serviço
exec "$@"