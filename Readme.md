# MedusaJS Plugin Environment

This project sets up a development environment for a MedusaJS plugin using Vagrant, Docker, Ansible, and Kubernetes.

## Prerequisites

- [Vagrant](https://www.vagrantup.com/)
- [VirtualBox](https://www.virtualbox.org/)
- [Ansible](https://www.ansible.com/)
- [Docker](https://www.docker.com/)

## Setup Instructions

### Vagrant and Docker Setup

1. Clone this repository:

   ```bash
   git clone <repository-url>
   cd medusa-plugin-env

2. Start the Vagrant virtual machine

    ```bash
    vagrant up

3. SSH into the virtual machine
    ```bash
    vagrant ssh

4. Navigate to the docker directory:
    ```bash
    cd /vagrant/docker

5. Build and start the Docker containers:
    ```bash
    ./scripts/start.sh

### Kubernetes Setup

1. Install [kubectl](https://kubernetes.io/docs/tasks/tools/) and [Minikube](https://minikube.sigs.k8s.io/docs/start/?arch=%2Flinux%2Fx86-64%2Fstable%2Fbinary+download/).

2. Start Minikube:
    ```bash
    minikube start

3. Deploy the application and database:
    ```bash
    kubectl apply -f k8s/

4.  Access the application via NodePort:
    ```bash
    minikube service medusa-app-service

### Prometheus Integration
To simulate Prometheus scraping, the fake exporter runs on port 3344 using Nginx.

### Cleanup

1. To stop and remove the Vagrant VM, run:
    ```bash
    vagrant destroy

2. To stop Docker containers, run:
    ```bash
    docker-compose down




