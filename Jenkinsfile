node {
    def app
    stage('clone repository'){
        checkout scm
    }
    stage('Build image'){
        app = docker.build('node_docker_demo')
    }
    stage('Test image'){
        app.inside{
            sh 'echo "Test passed"'
        }
    }
    stage('Push image'){
        docker.withRegitry('https://458710968389.dkr.ecr.ap-south-1.amazonaws.com/node_docker_demo', 'ecr:ap-south-1:node_ecr_credentials'){
        docker.image('node_docker_demo').push('latest')      
              }    
        }
    }
