
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

#resource "null_resource" "upload_build" {
#  provisioner "local-exec" {
#    command = "aws s3 sync ./build s3://jb-terraform-bucket-static-site --acl public-read --profile ci"
#  }
#
#  depends_on = [aws_s3_bucket.static_site]
#}