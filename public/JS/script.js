let http = new XMLHttpRequest();
http.open("get", "data.json", true);
http.send();
http.onload = function () {
  if (this.readyState == 4 && this.status == 200) {
    let products = JSON.parse(this.responseText);
    let output = "";
    for (let item of products) {
      output += `
                <div 
                    class="w-full  flex flex-col justify-center bg-[#fcfbfc] pt-[37px] md:pt-[55px] text-center cursor-pointer">
                    <h2 class="m-auto relative text-5xl md:text-[40px] font-semibold">
                        ${item.title}
                    </h2>
                    <h3
                        class="relative my-3 text-2xl md:text-[21px] text-[#4b4b4b] font-extralight">
                        ${item.description}
                    </h3>
                    <div class="grid grid-cols-4 mx-auto">
                        <a
                        class="cursor-pointer col-start-2 hover:underline leading-snug m-auto text-[#0071e3] text-[16px] md:text-[22px] font-normal">
                        ดูเพิ่มเติม
                        <i
                            class="fa fa-chevron-right fa-lg"
                            style="color: #4992da; font-size: 16px"></i>
                        </a>
                        <a
                        class="cursor-pointer col-start-3 hover:underline leading-snug m-auto text-[#0071e3] text-[16px] md:text-[22px] font-normal">
                        ซื้อ
                        <i
                            class="fa fa-chevron-right fa-lg"
                            style="color: #4992da; font-size: 16px"></i>
                        </a>
                    </div>
                    <div class="bg-[#fcfbfc] w-[70%] mx-auto flex justify-center">
                        <img
                        class="object-contain py-16 hover:scale-110 duration-500"
                        src="${item.image}"
                        alt="${item.description}"/>
                    </div>
                </div>

         `;
    }
    document.querySelector(".products").innerHTML = output;
  }
};
