pipeline {
    // Use the official Playwright image so Node.js and browser system libraries are aligned.
    agent {
        docker {
            image 'mcr.microsoft.com/playwright:v1.64.1-noble'
            // Allow npm to write its cache inside the Jenkins workspace.
            args '-u root'
        }
    }

    options {
        // Keep CI output readable and stop hung jobs after a reasonable interval.
        timestamps()
        timeout(time: 30, unit: 'MINUTES')
    }

    environment {
        BASE_URL = 'https://automationexercise.com'
        API_URL = 'https://automationexercise.com/api'
    }

    stages {
        stage('Install dependencies') {
            steps {
                // Install the exact dependency versions recorded by package-lock.json.
                sh 'npm ci'
            }
        }

        stage('Type check') {
            steps {
                // Fail early when TypeScript contains compile errors.
                sh 'npm run code:check'
            }
        }

        stage('Run Playwright tests') {
            steps {
                // Execute UI and API specs using the Chromium browser in the image.
                sh 'npm test'
            }
        }
    }

    post {
        always {
            // Preserve reports and traces even when a test stage fails.
            archiveArtifacts artifacts: 'playwright-report/**, test-results/**', allowEmptyArchive: true
        }
    }
}
