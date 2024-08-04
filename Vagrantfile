Vagrant.configure("2") do |config|
    config.vm.box = "ubuntu/focal64"
  
    config.vm.network "forwarded_port", guest: 3334, host: 3334
    config.vm.network "forwarded_port", guest: 3344, host: 3344
  
    config.vm.provision "ansible" do |ansible|
      ansible.playbook = "ansible/playbook.yml"
      ansible.inventory_path = "ansible/inventory.ini"
    end
  end
  