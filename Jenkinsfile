pipeline {
    agent any // Specifies that the pipeline can run on any available agent
    tools { allure 'allure' }

    stages {
        stage('Install Dependencies and Run Tests') {
            steps {
               sh """
                    docker exec -w "${env.WORKSPACE}" jest-runner bash -lc 'npm ci && npm test'
                 """

                 sh '''
                    echo "== CEK allure-results DI WORKSPACE JENKINS =="
                    pwd
                    ls -R allure-results || echo "allure-results TIDAK ADA di workspace Jenkins"
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