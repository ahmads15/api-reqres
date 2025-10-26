pipeline {
    agent any // Specifies that the pipeline can run on any available agent
    tools { nodejs 'node24' }
    stages {
        stage('Install Dependencies and Run Tests') {
            steps {
                echo 'mari install dependencies'
                sh '''
                    node -v && npm -v
                    npm install
                '''
                echo 'Running tests...'
                // Jalanin testnya dimarih
                sh '''
                    npm run test
                '''
            }
        }
        stage('Report') {
            steps {
                echo 'Misalnya ada reportnya disini'
                // command reportnya disini
            }
        }
    }
    post {
        always {
            echo 'Pipeline finished.'
        }
        success {
            echo 'Pipeline successful!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}