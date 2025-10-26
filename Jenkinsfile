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pipeline {
    agent any // Specifies that the pipeline can run on any available agent

    stages {
        stage('Checkout / Build') {
           steps {
            checkout([$class: 'GitSCM',
            branches: [[name: '*/master']],
            userRemoteConfigs: [[
                url: 'https://github.com/ahmads15/api-reqres.git',
                credentialsId: '097f7425-6693-4053-a045-bcc635051245'
          ]]
        ])
      }
        }

        stage('Install Dependencies and Run Tests') {
            steps {
                echo 'mari install dependencies'
                sh '''
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