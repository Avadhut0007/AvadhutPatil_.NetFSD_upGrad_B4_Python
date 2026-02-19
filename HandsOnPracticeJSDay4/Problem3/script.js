 let PurchaseAmount=2000;
        if(PurchaseAmount>=5000 ){
            let discount=PurchaseAmount*0.20;
            let finalPayableAmount=PurchaseAmount-discount;
            document.writeln("Discount: "+discount);
            document.writeln("Final Payable Amount: "+finalPayableAmount);
        }
        else if(PurchaseAmount>=3000 && PurchaseAmount<5000){
            let discount=PurchaseAmount*0.10;
            let finalPayableAmount=PurchaseAmount-discount;
            document.writeln("Discount: "+discount);
            document.writeln("Final Payable Amount: "+finalPayableAmount);
        }
        else if(PurchaseAmount<3000 && PurchaseAmount>=0){
            document.writeln("No discount");
            
            document.writeln("Final Payable Amount: "+PurchaseAmount);
        }
        else{
            document.writeln("Invalid amount");
        }