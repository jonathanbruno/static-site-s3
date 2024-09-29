
resource "aws_s3_bucket" "static_site_bucket" {
  bucket = var.blog_domain

  tags = {
    Name        = "A static site bucket"
    Environment = "Dev"
  }

  force_destroy = true
}

resource "aws_s3_bucket_public_access_block" "static_site_pa_block" {
  bucket = aws_s3_bucket.static_site_bucket.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_website_configuration" "static_site_website_configuration" {
  bucket = aws_s3_bucket.static_site_bucket.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "error.html"
  }
}

resource "aws_s3_bucket_policy" "add_object_policy" {
  bucket = aws_s3_bucket.static_site_bucket.id
  depends_on = [
    aws_s3_bucket_public_access_block.static_site_pa_block,
    aws_s3_bucket_website_configuration.static_site_website_configuration
  ]

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "s3:GetObject"
        Effect = "Allow"
        Resource = "${aws_s3_bucket.static_site_bucket.arn}/*"
        Principal = "*"
      }
    ]
  })
}

#resource "aws_s3_object" "files" {
#  for_each = local.file_list
#  
#  bucket = aws_s3_bucket.static_site_bucket.bucket
#  key    = each.key
#  source = each.value.source
#  content_type = each.value.content_type
#}

