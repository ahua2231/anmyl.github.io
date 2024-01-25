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
    标题: '实名认证冻结',
    语录: `<u>您好，因系统检测到您的实名认证年龄过小，存在不是本人使用的情况，需要您娱乐的游戏平台来与mipay官方反馈是您本人使用，才能为您申请解除限制~</u></br>
    <u>您好，由于MIPAY官方近期发现新用户实名成功后恶意刷单情况，为了MIPAY钱包的交易环境较好，提交实名认证需要您反馈游戏平台客服来与MIPAY官方客服对接确认后才能通过审核呢~</u></br>
    <u>若是本人使用的话，请您联系一下您娱乐的游戏平台客服，让游戏客服来与mipay官方对接核实即可~</u></br>
    <u>麻烦您这边到娱乐平台联系一下客服，然后让对方与MiPay平台对接后这边会为您审核处理~</u>`
},{
    标题: '非实名限制/冻结',
    语录: `<u>您好，根据卖家反馈您使用非实名付款，mipay官方禁止使用非实名交易，请问一下您与转账人是什么关系，为何不用自己的付款方式付款？</u></br>
    <u>根据卖家反馈，该笔资金存在使用他人账户进行交易付款，MIPAY禁止使用非本人账户进行交易，该笔订单卖家已锁定请您提供相关明细证明该笔资金来源于正规渠道~</u></br>
    <u>您好，核实到您这边多次非实名交易，因此官方被限制购买，客服这边可以为您申请解除，若后续再次出现非实名交易，直接取消订单需要自行承担风险，同时您的mipay账号将被永久冻结处理，请您后续交易务必遵守mipay交易规则！</u></br>
    <u>您好，您被限制12小时的【充值】权限目前已经恢复正常，至于您的【购买】权限则需等待至24小时后再来联系客服申请解除~</u></br>
    <u>您好，因您违反了MIpay钱包内用户协议，使用非实名信息交易，因此系统将您的购买权限禁止24小时！</u></br>
    <u>MiPay钱包交易必须使用本人的实名账号进行【收付款】，否则由此产生的订单纠纷将由您承担风险，同时使用非实名转账将被系统禁止充值也购买权限！</u>`
},{
    标题: '永久冻结',
    语录: `<u>您好，核实到该账号存在威胁举报行为，mipay官方永久禁止使用该账号，您这边无法使用mipay钱包！</u></br>
    <u>抱歉，该账号已经永久冻结，客服是无法帮助到您，永久冻结账户无法申请解除限制，请您知晓！</u></br>
    <u>您的账号已经无法申请解除，若客服这边没有相关的证明是不会提交系统冻结您的账号~</u></br>
    <u>mipay在线客服只能解答mipay钱包上的问题，无法为您处理您游戏平台的问题~</u>`
},{
    标题: '注销账号',
    语录: `<u>您好，您在使用mipay钱包时遇到什么问题，需要申请永久冻结您的账号，还请您告知一下！</u></br>
    <u>您好，已注册的账号是无法注销，若您长期不登录系统就会开启保护机制将您的账号冻结，您不来申请是无法自动解除~</u></br>
    <u>您好，mipay钱包是没有注销功能，客服这边也告知您，若您长期未登录系统会开启保护机制将您的账号冻结，您需要使用的时候再来申请解除！</u>`
},{
    标题: '出售限制',
    语录: `<u>您好，因您本月第一次超时放币，因此客服提交系统为您解除限制，请您后续交易期间收到买家款项第一时间为买家放币，避免再次被系统禁止账号出售权限~</u></br>
    <u>您好，由于您在挂单出售时，买家支付成功为您上传支付成功截图后，您未在规定时间内【确认放币】导致系统锁定订单，因此被系统禁止出售【】小时！</u></br>
    <u>您好，您的账号需要到该【】时间段才能申请解除限制，请您等待时间到后联系客服处理！</u></br>
    <u>目前客服已为您提交申请解除，还请您后续收到买家的款项后务必在规定时间内完成订单，避免后续交易中触发严重限制情况~</u></br>
    <u>您好，系统只判断您是否在规定时间内放币，不是说您故意或不是故意的就取消对您做出的惩罚，后续还请您在规定的时间内完成订单！</u>`
},{
    标题: '购买限制',
    语录: `<u>您好，由于您在未支付的情况下点击了【我已转账】并上传非支付成功的截图，因此根据用户协议，您被系统禁止购买24小时~</u></br>
    <u>目前客服已为您提交申请解除，还请您后续在交易购买时，请务必向卖家支付后再点击【我已转账】并上传支付成功的有效截图，否则多次违规的话，将被系统永久封禁账号的~</u>`
},{
    标题: '哪些平台可以使用MIPAY',
    语录: `<u>您好，与mipay钱包合作的游戏平台较多，您需要咨询一下您当前娱乐的游戏平台是否支持mipay钱包的充值渠道，支持就可以使用mipay钱包买卖交易~</u>`
},{
    标题: '恶意刷单/不付款上传截图',
    语录: `<u>您的账号因系统检测到存在故意刷单不支付行为，因此被系统【】小时~</u></br>
    <u>您的账号已为您申请解除，还请您后续规范使用mipay钱包，如果再次出现刷单不支付的情况，账号将被永久冻结了呢~</u></br>
    <u>温馨提示您：未支付成功的订单切勿点击【我已转账】请您直接取消订单、并更换其他付款方式进行交易呢~</u></br>
    <u>您的账号已经为您申请解除冻结状态，您目前可以正常交易了呢~</u></br>
    <u>经查询，您的账号因恶意刷单、上传虚假截图行为，目前账号已经被系统永久冻结，无法解除哦~</u>`
}];

// Call the function with the sample data
generateTable(sampleData);
