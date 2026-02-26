FROM node:24 AS base

# install latest available stable pnpm

RUN npm install -g pnpm

# Install python & pip

RUN apt update
RUN apt install python3 python3-pip -y

# Install latest stable version of Chrome for Testing

RUN apt update -y
RUN apt upgrade -y

RUN wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
RUN apt install ./google-chrome*.deb -y

# Install latest stable version of ChromeDriver for Testing

RUN apt update -y
RUN apt upgrade -y

RUN wget https://storage.googleapis.com/chrome-for-testing-public/145.0.7632.77/linux64/chromedriver-linux64.zip

# RUN LATEST_CHROMEDRIVER_VERSION=$(curl https://googlechromelabs.github.io/chrome-for-testing/LATEST_RELEASE_STABLE) && \
# wget https://storage.googleapis.com/chrome-for-testing-public/${LATEST_CHROMEDRIVER_VERSION}/linux64/chromedriver-linux64.zip

RUN unzip chromedriver-linux64.zip || rm chromedriver-linux64.zip
RUN chmod +x chromedriver-linux64/chromedriver 
RUN mv chromedriver-linux64/chromedriver /usr/local/bin/ 

# Install venv for python
RUN apt install python3-venv -y
