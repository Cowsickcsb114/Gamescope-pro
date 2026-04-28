pipeline {
  agent any

  stages {
    stage('Clone') {
      steps {
        git branch: 'main', url: 'https://github.com/Cowsickcsb114/Gamescope-pro.git'
      }
    }

    stage('Build') {
      steps {
        echo 'Building Gamescope-pro App...'
      }
    }

    stage('Test') {
      steps {
        echo 'Running tests...'
      }
    }

    stage('Deploy') {
      steps {
        echo 'Deploying Gamescope-pro...'
      }
    }
  }
}
