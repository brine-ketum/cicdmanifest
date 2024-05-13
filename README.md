## Install minikube cluster 
A minikube cluster is a One-Node cluster with Master node (processes) and worker nodes (processess) https://kubernetes.io/docs/tutorials/kubernetes-basics/create-cluster/cluster-intro/

For this demo, we will install it and linux and Windows OS
# Linux
sudo apt-get update
sudo apt-get install apt-transport-https curl
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
sudo install minikube-linux-amd64 /usr/local/bin/minikube
minikube start
minikube status 

# Windows 
Open PowerShell as Administrator and run:
choco install minikube
minikube start --driver=hyperv

## Jenkins installation
Jenkins is installed on EC2. Follow the instructions on https://www.jenkins.io/doc/tutorials/tutorial-for-installing-jenkins-on-AWS/ . You can skip "Configure a Cloud" part for this demo. Please note some commands from this link might give errors, below are the workarounds:

If you get daemonize error while running the command sudo yum install jenkins java-1.8.0-openjdk-devel -y then , run the commands from the answer of https://stackoverflow.com/questions/68806741/how-to-fix-yum-update-of-jenkins

Install Docker on the EC2 after Jenkins is installed by following the instructions on https://serverfault.com/questions/836198/how-to-install-docker-on-aws-ec2-instance-with-ami-ce-ee-update

Run sudo chmod 666 /var/run/docker.sock on the EC2 after Docker is installed.

Install Git on the EC2 by running sudo yum install git

## Jenkins plugins
Install the following the follwing plugins on 

Amazon EC2 plugin (No need to set up Configure Cloud after)
Docker plugin
Docker Pipeline
GitHub Integration Plugin
Parameterized trigger Plugin
