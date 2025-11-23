pipeline {
    agent any // Specifies that the pipeline can run on any available agent
    tools { allure 'allure' }

    stages {
        stage('Install Dependencies and Run Tests') {
            steps {
               sh """
                    docker exec -w "${env.WORKSPACE}" jest-runner bash -lc 'npm ci && npm test'
                 """
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
            allure([
                    includeProperties: false,
                    jdk: '',
                    results: [[path: 'allure-results']]
                ])
        }
        success {
            echo 'Pipeline successful!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}