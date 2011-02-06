module Jekyll
  class Site
    def process
      self.reset
      self.read
      self.cleanup
      self.generate
      self.render
      self.write
    end
  end
  
  class VersionReporter < Generator
    safe true
    priority :low
    
    def generate(site)
      File.open(File.join(site.config['destination'], 'version.html'), 'w') do |f|
        f.write(generate_report(site))
      end
    end
    
    private
    
    def generate_report(site)
      "Site generated with Jekyll version: #{Jekyll::VERSION}"
    end
    
  end
end
