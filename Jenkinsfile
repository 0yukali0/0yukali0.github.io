pipeline {
    agent {
        docker {
            image '18.19-alpine' 
            args '-p 3000:3000' 
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