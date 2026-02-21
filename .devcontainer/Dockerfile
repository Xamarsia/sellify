FROM node:24 AS base

# install latest available stable pnpm
RUN npm install -g pnpm

# Install python & pip
RUN apt update
RUN apt install python3 python3-pip -y


# Install Chrome for Testing

RUN apt update -y
RUN apt upgrade -y

ARG CHROME_VERSION="145.0.7632.77"
ARG CHROMEDRIVER_VERSION="145.0.7632.77"

RUN wget "https://storage.googleapis.com/chrome-for-testing-public/${CHROME_VERSION}/linux64/chrome-linux64.zip"
RUN unzip chrome-linux64.zip || rm chrome-linux64.zip
RUN chmod +x chrome-linux64/chrome
RUN mv chrome-linux64/chrome /usr/local/bin/ 

# Install ChromeDriver (r1568190) for Testing

RUN apt update -y
RUN apt upgrade -y

RUN wget https://storage.googleapis.com/chrome-for-testing-public/${CHROMEDRIVER_VERSION}/linux64/chromedriver-linux64.zip
RUN unzip chromedriver-linux64.zip || rm chromedriver-linux64.zip
RUN chmod +x chromedriver-linux64/chromedriver 
RUN mv chromedriver-linux64/chromedriver /usr/local/bin/ 


RUN apt install python3-venv -y
# RUN python3 -m venv venv-selenium
