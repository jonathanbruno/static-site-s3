resource "aws_vpc" "main" {
  cidr_block = "10.0.0.0/16"

  tags = {
    Name = "jb-vpc"
  }
}

resource "aws_subnet" "public_subnet-a" {
  vpc_id     = aws_vpc.main.id
  cidr_block = "10.0.1.0/24"

  tags = {
    Name = "jb-public-subnet-a"
    availability_zone = "us-east-2a"
  }
}

resource "aws_subnet" "public_subnet-b" {
  vpc_id     = aws_vpc.main.id
  cidr_block = "10.0.2.0/24"

  tags = {
    Name = "jb-public-subnet-b"
    availability_zone = "us-east-2b"
  }
}