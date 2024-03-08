pipeline {
    agent {
        docker {
            image 'node:18.19-alpine3.19' 
            args '-p 3000:3000 --user root' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm ci'
                sh 'npm run build'
            }
        }
    }
}