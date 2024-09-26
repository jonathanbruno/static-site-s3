variable route53_zone_id {
  type        = string
  default     = "Z073869138SJ1GR8SQUQK"
  description = "Hosted zone id from Route 53"
}

variable acm_certificate_arn {
  type        = string
  default     = "arn:aws:acm:us-east-1:443370703773:certificate/edccd4fc-b2c1-447e-a026-141245696feb"
  description = "ACM certificate ARN"
}

variable blog_domain {
  type        = string
  default     = "blog.jonathanbruno.dev"
  description = "Domain for the blog"
}