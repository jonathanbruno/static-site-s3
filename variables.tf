variable route53_zone_id {
  type        = string
  description = "Hosted zone id from Route 53"
}

variable acm_certificate_arn {
  type        = string
  description = "ACM certificate ARN"
}

variable blog_domain {
  type        = string
  description = "Domain for the blog"
}

variable terraform_backend_bucket {
  type        = string
  description = "Bucket to store the terraform state"
}