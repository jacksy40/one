class MenusController < ApplicationController

  def index
    @cat = Section.all
    @appitizer = Menu.where(section_name: 'Appitizer')
    @rice = Menu.where(section_name: 'Rice')
    @lo_mein = Menu.where(section_name: 'Lo Mein')
    @dumplings = Menu.where(section_name: 'Dumplings')
    @beef = Menu.where(section_name: 'Beef')
    @chicken = Menu.where(section_name: 'Chicken')
    @pork = Menu.where(section_name: 'Pork')
    @seafood = Menu.where(section_name: 'Seafood')
    @soups = Menu.where(section_name: 'Soups')
    @drinks = Menu.where(section_name: 'Drinks')
  end

  def show
    menu = Menu.find(params["id"])
    redirect_to menu_path
  end

  def new
    @sections = Section.all
    @section = Section.new
    @menu = Menu.new

  end

  def create
    if params[:section].present?
      section = Section.new(section_params)
      if section.save
        flash[:notice] = "Saved."
      end
    else
      menu = Menu.new(menu_params)
      if menu.save
        flash[:notice] = "Saved."
      else
        flash[:notice]='unsaved.'
      end
    end
    redirect_to new_menu_path
  end

  def destroy
    menu = Menu.find(params["id"])
    menu.destroy
    redirect_to menus_path
  end

  private

  def section_params
    params.require(:section).permit( :section_name )
  end

  def menu_params
    params.require(:menu).permit( :spicy, :name, :description, :picture, :price, :section_name)
  end

end

