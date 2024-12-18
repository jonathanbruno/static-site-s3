terraform {
  required_version = ">= 0.12"

   backend "s3" {
    bucket = "jb-terraform-bucket-static-site"
    key    = "terraform/state.tfstate"
    region = "us-east-1"
    shared_credentials_file = "~/.aws/credentials"
    profile = "ci"
  }
}

provider "aws" {
  region = "us-east-1"

  default_tags {
    tags = {
      managed-by = "terraform"
    }
  }
}

data "aws_caller_identity" "current" {}

output "aws_account_id" {
  value = data.aws_caller_identity.current.account_id
}