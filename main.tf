terraform {
  required_version = ">= 0.12"

   backend "s3" {
    bucket = var.terraform_backend_bucket
    key    = "terraform/state.tfstate"
    region = "us-east-2"
  }
}

provider "aws" {
  region = "us-east-2"

  default_tags {
    tags = {
      managed-by = "terraform"
    }
  }
}

data "aws_caller_identity" "current" {}

#output "aws_account_id" {
#  value = data.aws_caller_identity.current.account_id
#}