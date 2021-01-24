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

        stage('Push image') {
        /* Finally, we'll push the image with two tags:
         * First, the incremental build number from Jenkins
         * Second, the 'latest' tag.
         * Pushing multiple tags is cheap, as all the layers are reused. */
        docker.withRegistry('https://458710968389.dkr.ecr.ap-south-1.amazonaws.com', 'ecr:ap-south-1:node_ecr_credentials') {
        docker.push("$BUILD_NUMBER")
        docker.push('latest')
        }
    }
    stage('Remove Unused docker image') {
        sh "docker rmi $imagename:$BUILD_NUMBER"
         sh "docker rmi $imagename:latest"

      }
    
    }

    }
