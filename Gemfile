source 'https://rubygems.org'
ruby '2.1.3'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'bundler'
gem 'rails', '4.1.4'
gem 'pg'

# backend engine
gem 'activeadmin', github: 'gregbell/active_admin'


# authentication
gem 'devise', github: 'plataformatec/devise'
gem 'omniauth'
gem 'omniauth-facebook'


# views & css & js
gem 'sass-rails', '~> 4.0.3'
gem 'uglifier', '>= 1.3.0'
gem 'coffee-rails', '~> 4.0.0'
gem 'therubyracer',  platforms: :ruby
gem 'jquery-rails'
gem 'jbuilder', '~> 2.0'
gem 'haml-rails'
gem 'font-awesome-rails'


# tools
gem 'tzinfo-data'
gem 'validates_formatting_of'
gem 'kaminari'
gem 'simple_form'
gem 'nested_form'


# bundle exec rake doc:rails generates the API under doc/api.
gem 'sdoc', '~> 0.4.0',          group: :doc

# Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring


group :development, :test do
  gem 'spring',        group: :development
  gem 'awesome_print'
  gem 'quiet_assets'
  gem 'byebug'
  gem 'thin'
end

group :production do
  gem 'rails_12factor'
end