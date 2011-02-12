module Jekyll
  module Filters
    # Returns all content before the first-encountered WP-style MORE tag.
    # Allows authors to mark the fold with an <!--more--> in their drafts.
    # ex: Liquid error: private method `split' called for nil:NilClass
    def before_fold(input)
      input.split("<!--more-->").first
    end
  end
end
