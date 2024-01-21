// Function to generate a table with data
function generateTable(data) {
    const tableContainer = document.getElementById('table-container');
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    // Create table header
    function createHeaderRow() {
        const headerRow = document.createElement('tr');
        for (const key in data[0]) {
            const th = document.createElement('th');
            th.textContent = key;
            headerRow.appendChild(th);
        }
        return headerRow;
    }

    thead.appendChild(createHeaderRow());
    table.appendChild(thead);

    // Create table rows and cells
    function createRow(item) {
        const row = document.createElement('tr');
        for (const key in item) {
            const cell = document.createElement('td');
            cell.innerHTML = item[key];
            row.appendChild(cell);
        }
        return row;
    }

    data.forEach(function(item) {
        tbody.appendChild(createRow(item));
    });

    table.appendChild(tbody);
    tableContainer.appendChild(table);
}

// Sample data
const sampleData = [{
    标题: 'MIPAY-总控',
    链接: `<u>http://miadmin.151a45440aa2e203.com/#/dashboard</u>`
}, {
    标题: 'MIPAY-商户后台',
    链接: `<u>https://pay.mipay-mlkjadmin.com</u></br>
    <u>http://18.178.167.35:8005/#/user/login</u>`
}, {
    标题: 'VPAY-总控',
    链接: `<u>http://13.115.135.30:8808/#/order/sellRecord/listByPage</u></br>
    <u>http://admin.v-mladminkj.com</u>`
}, {
    标题: 'VPAY-商户后台',
    链接: `<u>https://pay.vpay-mlkjadmin.com/#/user/login</u></br>
    <u>http://13.115.135.30:8809/#/user/login</u>`
}, {
    标题: 'MIPAY-云客服',
    链接: `<u>https://g5d593jhh8d5hntg2.com/chat/text/chat_0ZsAtN.html</u>`
}, {
    标题: 'VPAY-云客服',
    链接: `<u>https://g5d593jhh8d5hntg2.com/chat/text/chat_1ksc8o.html</u>`
}, {
    标题: 'MIPAY*VPAY-云客服登录',
    链接: `<u>pc-admin.jk2s5ht77u289sh8rt88.com</u>`
}, {
    标题: 'MIPAY*VPAY-800客服登录',
    链接: `<u>https://admin.mlkefu-admin.com/#/main/business/chat</u>`
}, {
    标题: 'MIPAY-800客服',
    链接: `<u>https://mipay.fqwfierpw99.com/?spid=543</u>`
}, {
    标题: 'VPAY-800客服',
    链接: `<u>https://vpay.fqwfierpw99.com/?spid=1386</u>`
}, {
    标题: '过往-MIPAY-订单纠纷统计',
    链接: `<u>https://docs.google.com/spreadsheets/d/1aJccNB2YHftYoKimwcm0BwGFYq_ETtvSIxu_fzvk5Co/edit#gid=1058673741</u>`
}, {
    标题: '过往-MIPAY-冻结与风控',
    链接: `<u>https://docs.google.com/spreadsheets/d/1Oq7zK3O0bXaByrMbqGnXZh8I6mNS5IbJX6z76eTKP2s/edit#gid=2262177481983262012</u>`
}, {
    标题: '过往-MIPAY-非实名交易',
    链接: `<u>https://docs.google.com/spreadsheets/d/19oKNBpr8Vmrp1LBrke1Fh6uCCApW9TjNku-JGcQgiGU/edit#gid=1727909453</u>`
}, {
    标题: '过往-VPAY-订单纠纷统计',
    链接: `<u>https://docs.google.com/spreadsheets/d/1YVCoq2MWfDqPSD7K7yQpXf4ic6eujZMOTktZzrwneaM/edit#gid=1153826769</u>`
}, {
    标题: '过往-VPAY-冻结与风控',
    链接: `<u>https://docs.google.com/spreadsheets/d/1wLARy19QgdtgnRbujKgF7YBdYCMYDSm2rE1OGDIF5aU/edit#gid=2091025262</u>`
}, {
    标题: '过往-VPAY-非实名交易',
    链接: `<u>https://docs.google.com/spreadsheets/d/1P9FBIfD4pKdT7AtvewTeMIWxOMS9ZaWHSl9hx58xo_4/edit#gid=1871803990</u>`
}, {
    标题: 'MIPAY*VPAY-教程',
    链接: `<u>https://docs.google.com/spreadsheets/d/1cbXJDvvZp--9Eu3dMY-6-LNR1LUYIn7JAGI1kZKmiHw/edit#gid=804777899</u>`
}, {
    标题: '2024-MIPAY-订单纠纷统计',
    链接: `<u>https://docs.google.com/spreadsheets/d/10OsGR0yhvCv9mFlJBlf-855Vd9VjfDojb1d06KxRFmU/edit#gid=1264549511</u>`
}, {
    标题: '2024-MIPAY-冻结与风控',
    链接: `<u>https://docs.google.com/spreadsheets/d/1mcvqpaQ0hFfTrrypRghVAayKtsxLHHsoYdqQPt9lPi0/edit#gid=939157683</u>`
}, {
    标题: '2024-MIPAY-非实名交易',
    链接: `<u>https://docs.google.com/spreadsheets/d/1U8JU9GPkNP6YDuKCzLHf69RebFnH1EXwKIdBDmaNbS4/edit#gid=437287221</u>`
}, {
    标题: '2024-VPAY-订单纠纷统计',
    链接: `<u>https://docs.google.com/spreadsheets/d/1d1CQOCciR0_s52Tlb5NktjCXNp_ALS5nVRoPiQiSWgE/edit#gid=1398558272</u>`
}, {
    标题: '2024-VPAY-冻结与风控',
    链接: `<u>https://docs.google.com/spreadsheets/d/199XzcLxKCI9Slv-g81RGg1ty_R5tmFGp0tFrygEa9uI/edit#gid=356827964</u>`
}, {
    标题: '2024-VPAY-非实名交易',
    链接: `<u></u>`
}, {
    标题: '交易期间违反用户 限制流程',
    链接: `<u class="text">购买方未付款上传截图出售方规定时间内未放币</u></br>
    <u>第一次 - 警告后解除</u></br>
    <u>第二次 - 警告后解除</u></br>
    <u>第三次 - 警告后解除</u></br>
    <u>第四次 - 限制出售，限制【2】小时</u></br>
    <u>第五次 - 限制出售，限制【6】小时</u></br>
    <u>第六次 - 限制出售，限制【24】小时</u></br>
    <u>第七次 - 限制出售，限制【48】小时</u></br>
    <u>第八次 - 限制出售，限制【72】小时</u></br>
    <u>后续重复出现违规情况 会根据用户当前交易订单限制！</u></br>
    <u class="text">购买方未付款上传截图</u></br>
    <u>第一次 - 禁止购买【6】小时</u></br>
    <u>第二次 - 禁止购买【12】小时</u></br>
    <u>第三次 - 禁止购买【24】小时</u></br>
    <u>第四次 - 禁止购买【48】小时</u></br>
    <u>第五次 - 禁止购买【72】小时</u></br>
    <u>批图骗单用户会根据当前交易问题情况限制或冻结账户</u></br>
    <u class="red">【如果有恶意乱上传截图超过次数5次,永久冻结】</u></br>
    <u class="text">购买方非实名支付</u></br>
    <u class="bull">【**如果卖家没来反馈，后台自己查出的不用限制**】</u></br>
    <u>卖家锁定订单来反馈收到非实名要求退款或者我们这边给卖家说买家交易良好  卖家放币情况下</u></br>
    <u>第一次 - 警告</u></br>
    <u>第二次 - 禁止购买 【6】小时</u></br>
    <u>第三次 - 禁止购买 【12】小时  禁止平台充值 6 H</u></br>
    <u>第四次 - 禁止购买 【24】小时  禁止平台充值 12 H</u></br>
    <u>第五次 - 禁止购买 【48】小时  禁止平台充值 24 H</u></br>
    <u>第六次 - 禁止购买 【7】天     禁止平台充值 48 H</u></br>
    <u>一个月内犯了6次的人，让客户去反馈给平台和mipay对接给他开一个特殊账号，开通后老账号冻结！</u></br>
    <u class="red"class="red">**禁止充值是针对卖家放币的情况下执行**</u></br>
    <u class="red">后续重复出现违规情况 会根据用户当前交易量来判断处理！ 【违规者提供代付人信息直接解除平台充值权限，付款人手持身份证就直接解除购买，不能提供代付人的任何信息限制时间过后直接解除【包括购买权限】，若违规者一直反馈不能提供代付人的信息 查看该用户的交易量和当月违规记录，如果该用户交易量也好 当月内没有非实名支付的情况 由组长来判断处理】不看之前的违规记录，只看当月违规记录来限制！！</u></br>
    <u class="text">双方虚假交易情况</u></br>
    <u>买家 / 卖家限制【购买与出售】权限</u></br>
    <u>第一次 - 限制【购买与出售】24小时</u></br>
    <u>第二次 - 限制【购买与出售】48小时</u></br>
    <u>第三次 - 限制【购买与出售】72小时</u></br>
    <u>后续重复出现违规情况 由组长来判断处理！【<u class="red">一个月内恶意虚假交易了四次的永久冻结</u>】</u></br>
    <u class="text">购买方引导私下交易情况</u></br>
    <u>第一次 - 冻结 6 小时</u></br>
    <u>第二次 - 冻结 12小时</u></br>
    <u>第三次 - 冻结 24小时</u></br>
    <u>第四次 - 冻结 48小时</u></br>
    <u>第五次 - 冻结 7 天</u></br>
    <u>超过五次 永久冻结！【<u class="red">不看之前的违规记录，只看当月违规记录来限制</u>】</u></br>`
}, {
    标题: '',
    链接: `<u></u>`
}, {
    标题: '',
    链接: `<u></u>`
}, {
    标题: '',
    链接: `<u></u>`
}];

// Call the function with the sample data
generateTable(sampleData);
