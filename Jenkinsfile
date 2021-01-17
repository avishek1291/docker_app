node {
    def app
    stage('clone repository'){
        checkout scm
    }
    stage('Build image'){
        app = docker.build('repopath')
    }
    stage('Test image'){
        app.inside{
            sh 'echo "Test passed"'
        }
    }
    stage('Push image'){
        docker.withRegitry('https://registry.hub.docker.com', 'git'){
        app.push("${env.BUILD_NUMBER}")            
        app.push("latest")        
              }    
        }
    }
