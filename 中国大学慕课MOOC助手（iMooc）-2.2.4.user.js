// ==UserScript==
// @name         中国大学慕课MOOC助手（iMooc）
// @namespace    http://tampermonkey.net/
// @version      2.2.4
// @description  -
// @author       fourEggs
// @antifeature  payment
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARsAAAENCAIAAACwwFbwAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4xLWMwMDAgNzkuYjBmOGJlOSwgMjAyMS8xMi8wOC0xOToxMToyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjIgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0wNy0wOFQxMDoxNjozNyswODowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMDctMDhUMTA6MTY6NTgrMDg6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMDctMDhUMTA6MTY6NTgrMDg6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjcyZWUxYzFhLTYzZmMtNDY0YS04NTc4LWQ5YTRlMWZmYjczMCIgeG1wTU06RG9jdW1lbnRJRD0i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
// @grant        unsafeWindow
// @grant        GM_xmlhttpRequest
// @grant        GM.xmlHttpRequest
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_addStyle
// @grant        GM_info
// @license      MIT
// @connect      service-lib9g9vw-1301710088.gz.apigw.tencentcs.com
// @connect      icourse163.org
// @connect      localhost
// @match        https://www.icourse163.org/learn/*
// @match        http://www.icourse163.org/learn/*
// @match        http://www.icourse163.org/spoc/learn/*
// @match        https://www.icourse163.org/spoc/learn/*
// @match        https://www.icourse163.org/mooc/*
// @require      https://lib.baomitu.com/jquery/3.7.1/jquery.js
// @require      https://lib.baomitu.com/jqueryui/1.13.2/jquery-ui.js
// @require      https://lib.baomitu.com/layui/2.8.17/layui.js
// @require      https://lib.baomitu.com/pdf.js/3.11.174/pdf.min.js
// @run-at       document-end
// @downloadURL https://update.greasyfork.org/scripts/468315/%E4%B8%AD%E5%9B%BD%E5%A4%A7%E5%AD%A6%E6%85%95%E8%AF%BEMOOC%E5%8A%A9%E6%89%8B%EF%BC%88iMooc%EF%BC%89.user.js
// @updateURL https://update.greasyfork.org/scripts/468315/%E4%B8%AD%E5%9B%BD%E5%A4%A7%E5%AD%A6%E6%85%95%E8%AF%BEMOOC%E5%8A%A9%E6%89%8B%EF%BC%88iMooc%EF%BC%89.meta.js
// ==/UserScript==

let cdkey = GM_getValue("cdkey") || '';
let use_cdkey = (GM_getValue("use_cdkey") && cdkey) || false
let first_hide = GM_getValue("first_hide")

let storage_cdk = cdkey
if (!use_cdkey) {
    cdkey = ''
}
let swal = document.createElement('script');
swal.src = "https://lib.baomitu.com/limonte-sweetalert2/11.8.0/sweetalert2.all.min.js";
document.head.appendChild(swal);

let layer_css = document.createElement('link');
layer_css.rel = "stylesheet";
layer_css.href = "https://lib.baomitu.com/layui/2.8.17/css/layui.css";
document.head.appendChild(layer_css);

pdfjsLib.GlobalWorkerOptions.workerSrc = "https://imooc-1301710088.cos.ap-nanjing.myqcloud.com/public/pdf.worker.min.js";

const Debug = false;
const version = GM_info.script.version
const scriptName = GM_info.script.name
let base_url;

if (Debug) {
    base_url = 'http://localhost:5000/'
} else {
    base_url = 'https://service-lib9g9vw-1301710088.gz.apigw.tencentcs.com/release/'
}

let studyTime = 0;
let begin_get_answer = false;
//防止多开插件
if (unsafeWindow.opened === undefined) {
    unsafeWindow.opened = true
} else {
    throw new Error('请勿多开插件')
}

let user_info = unsafeWindow.webUser || GM_getValue('webUser');

let global_data = {
    webUser: {...user_info},
}
global_data.csrfkey = document.cookie.match(/NTESSTUDYSI=(.*?);/) ? document.cookie.match(/NTESSTUDYSI=(.*?);/)[1] : undefined
global_data.webUser.ban = true
function show_msg() {
    if (!$("#floatingWindow")[0].hidden)
        return layer.msg(...arguments)
}

function get_role() {
    return new Promise(function (resolve, reject) {
        const user_id = global_data.webUser.id
        const data = {
            memberId: user_id
        }
        GM.xmlHttpRequest({
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Origin': 'null'
            },
            url: 'https://www.icourse163.org/web/j/memberBean.getMocMemberPersonalDtoById.rpc?csrfKey=' + global_data.csrfkey,
            data: JSON.stringify(data),
            method: 'POST',
            onload: function (result) {
                result = JSON.parse(result.responseText)
                if (result.result.isTeacher) {
                    global_data.isStudent = false
                    resolve(false)
                } else {
                    global_data.isStudent = true
                    resolve(true)
                }
            }
        })
    })
}

function verify_version(tip = false) {
    if (global_data.webUser.ban) {
        return
    }
    let last_query_time = localStorage.getItem('last_query_time') || 0
    if (new Date().getTime() - last_query_time > 30 * 60 * 1000 || tip) {
        GM.xmlHttpRequest({
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Origin': 'null'
            },
            url: base_url + 'api/getVersion',
            method: 'GET',
            onload: function (result) {
                result = JSON.parse(result.responseText)
                if (result.status === 0) {
                    if (result.announce) {
                        if (!first_hide)
                            Swal.fire(result.announce);
                    }
                    localStorage.setItem("announce", result.announce || '')
                    //存储版本号和当前时间
                    localStorage.setItem('last_query_time', new Date().getTime())
                    localStorage.setItem("latest_version", result.latest_version)
                    if (result.latest_version > version && scriptName !== 'iMooc测试') {
                        Swal.fire({
                            title: '发现新版本，跳转到更新页面？',
                            text: "不更新可能会影响正常使用！",
                            icon: 'question',
                            showCancelButton: true,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: '跳转',
                            cancelButtonText: '稍后更新',
                        })
                            .then((result) => {
                                if (result.isConfirmed) {
                                    window.open("https://scriptcat.org/scripts/code/1310/%E4%B8%AD%E5%9B%BD%E5%A4%A7%" +
                                        "E5%AD%A6%E6%85%95%E8%AF%BEMOOC%E5%8A%A9%E6%89%8B%EF%BC%88iMooc%EF%BC%89.user.js")
                                }
                            })
                    } else {
                        tip && show_msg('已是最新版本')
                    }
                } else {
                    show_msg('获取最新版本失败')
                }
            }
        })
    } else {
        let announce = localStorage.getItem("announce")
        let latest_version = localStorage.getItem("latest_version")
        if (announce && !first_hide) {
            Swal.fire(announce);
        }
        if (latest_version > version && scriptName !== 'iMooc测试') {
            Swal.fire({
                title: '发现新版本，跳转到更新页面？',
                text: "不更新可能会影响正常使用！",
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: '跳转',
                cancelButtonText: '稍后更新',
            })
                .then((result) => {
                    if (result.isConfirmed) {
                        window.open("https://scriptcat.org/scripts/code/1310/%E4%B8%AD%E5%9B%BD%E5%A4%A7%" +
                            "E5%AD%A6%E6%85%95%E8%AF%BEMOOC%E5%8A%A9%E6%89%8B%EF%BC%88iMooc%EF%BC%89.user.js")
                    }
                })
        } else {
            tip && show_msg('已是最新版本')
        }
    }

}

function load_lesson() {
    let lesson_id = global_data.lesson_id
    let lession_url = 'https://www.icourse163.org/web/j/courseBean.getLastLearnedMocTermDto.rpc?csrfKey=' + global_data.csrfkey
    let lession_data = {
        termId: lesson_id,
    }
    let chapters_data = $.ajax({
        url: lession_url,
        type: 'post',
        async: false,
        data: lession_data
    })
    const chapters = chapters_data.responseJSON.result.mocTermDto.chapters
    global_data.chapter_storage = chapters
    let units = []
    for (let chapter of chapters) {
        if (!chapter.lessons)
            continue
        for (let lesson of chapter.lessons) {
            if (!lesson.units)
                continue
            units = units.concat(lesson.units)
        }
    }
    global_data.units = units
}

function verifyUser(id, email, nickName, loginId, personalUrlSuffix, loadIndex) {
    GM.xmlHttpRequest({
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Origin': 'null'
        },
        url: base_url + 'api/verifyUser',
        data: JSON.stringify({
            id,
            email,
            nickName,
            loginId,
            personalUrlSuffix,
            cdkey
        }),
        method: 'POST',
        onload: function (result) {
            layer.close(loadIndex)
            result = JSON.parse(result.responseText)
            if (result.status === 0) {
                if (result.new === true) {
                    layer.open({
                        type: 1,
                        title: '欢迎使用iMooc',
                        content: `
                        <div style="padding: 16px;font-size: 18px;margin: 20px">
                        <div>   您有 <span style="color:red;font-size: 20px">6</span> 个初始体验积分，作业和测验单次 <span style="color:red;font-size: 20px">1</span> 积分，
                        考试单次 <span style="color:red;font-size: 20px">10</span> 积分。</div>
                        <br>
                        <div>   刷课按照种类计算，如视频、ppt、随堂测验,视频<span style="color:red;font-size: 20px">2</span>积分，富文本、讨论<span style="color:red;font-size: 20px">
                        免费(刷视频赠送)</span>,其余各<span style="color:red;font-size: 20px">1</span>积分。</div>
                        <br>
                        <div style="margin-left: 20px">按 <span style="color:red;font-size: 20px">Z+1</span> 开始答题</div>
                        <div style="margin-left: 20px">按 <span style="color:red;font-size: 20px">Z+2</span> 开始刷课</div>
                        <br>
                        <div>   体验积分使用完后，您可以选择<span style="color:red">充值积分</span>以继续使用。充值后会给您一个专属 <span style="color:blue;font-size: 20px">cdkey</span>，
                        将获取的 <span style="color:blue;font-size: 20px">cdkey</span>填入指定位置即可使用<span style="color:blue;font-size: 20px">cdkey</span> 中的积分帮他人刷课。</div>
                        </div>`,
                        area: ['650px', '450px'], // 初始宽高
                        shade: [0.9, '#000'],
                        shadeClose: true // 点击遮罩区域，关闭弹层
                    });
                }
                global_data.webUser.score = result.score
                $('#last_score').text(result.score)
                result.question_vip === 1 && ($('#question_vip_icon')[0].style.backgroundColor = 'green')
                result.lesson_vip === 1 && ($('#lesson_vip_icon')[0].style.backgroundColor = 'green')
                global_data.webUser.question_vip = result.question_vip
                global_data.webUser.lesson_vip = result.lesson_vip
                if (result.cdk) {
                    global_data.webUser.cdk = result.cdk
                    $("#mycdk")[0].innerText = "当前账号cdkey：" + result.cdk
                }
                global_data.webUser.ban = false
            } else {
                if (result.tip)
                    show_msg(result.tip)
                else {
                    show_msg(result.msg)
                }
                $('#last_score').text(result.msg)
                $('#last_score')[0].style.color = 'red'
                global_data.webUser.score = 0
            }
            GM_setValue('webUser', global_data.webUser)
        },
        onerror: function (error) {
            layer.close(loadIndex)
            show_msg('获取用户信息失败')
        }
    })
}

$(document).ready(async function () {
    let email = user_info.email || ''
    let nickName = user_info.nickName || ''
    let loginId = user_info.loginId || ''
    let personalUrlSuffix = user_info.personalUrlSuffix || ''
    get_role().then(function (isStudent) {
        if (!isStudent) {
            return
        }
        const floatingWindow = document.createElement("div");
        if (first_hide)
            floatingWindow.hidden = true
        // 设置悬浮窗样式
        floatingWindow.id = "floatingWindow"
        floatingWindow.style = "position: fixed;line-height:30px;text-align: center;height: 205px;width: 150px;top:" +
            " 30vh;right" +
            ": 5vh;z-index: 9999;background-color: #ffffff;border: 1px solid #000000;padding: 10px 10px 20px 10px;border-radius: 5px;box-sh" +
            "adow: 0px 0px 5px rgba(0, 0, 0, 0.3);box-sizing: content-box;font-size: 16px;"
        const question_vip = document.createElement("span")
        question_vip.textContent = "答题VIP "
        question_vip.style = 'font-size:12px;'
        const question_vip_icon = document.createElement("div")
        question_vip_icon.id = 'question_vip_icon'
        question_vip_icon.style = "width: 10px;height: 10px;border-radius: 50%;background-color: #808080;display: inline-block;"
        const lesson_vip = document.createElement("span")
        //创建一个竖杠用来分隔
        const vertical_bar = document.createTextNode("|")
        lesson_vip.textContent = "刷课VIP "
        lesson_vip.style = 'font-size:12px;'
        const lesson_vip_icon = document.createElement("div")
        lesson_vip_icon.id = 'lesson_vip_icon'
        lesson_vip_icon.style = "width: 10px;height: 10px;border-radius: 50%;background-color: #808080;display: inline-block;"

        const VIP = document.createElement("div")
        VIP.style = "line-height: 20px;"
        VIP.appendChild(question_vip);
        VIP.appendChild(question_vip_icon);
        VIP.appendChild(vertical_bar);
        VIP.appendChild(lesson_vip);
        VIP.appendChild(lesson_vip_icon);

        const tip_1 = document.createTextNode("剩余积分:")
        const tip_2 = document.createElement("button")
        tip_2.innerText = 'Z+1显示答案'
        tip_2.style = 'border-radius:5px;width:110px;background-color:#008CBA;color:#e7e7e7;border:none;height: 24px'
        tip_2.onclick = function () {
            show_answer()
        }

        const tip_3 = document.createElement("button")
        tip_3.innerText = 'Z+2开始刷课'
        tip_3.style = 'border-radius:5px;width:110px;background-color:#008CBA;color:#e7e7e7;border:none;height: 24px'
        tip_3.onclick = function () {
            if (global_data.webUser.ban) {
                show_msg('无效用户')
                return
            }
            Swal.fire({
                title: '选择快刷还是慢刷?',
                icon: 'question',
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: '快刷(积分)',
                denyButtonText: `挂机刷课(免费)`,
            }).then((result) => {
                if (result.isConfirmed) {
                    skip_lesson()
                } else if (result.isDenied) {
                    slow_skip_lesson()
                }
            })
        }

        const recharge = document.createElement("button")
        recharge.innerText = '充 值 积 分'
        recharge.style = 'width:110px;background-color:rgb(255, 147, 38);color:white;border:none;border-radius:5px;height: 24px'
        recharge.onclick = function () {
            if (global_data.webUser.ban) {
                show_msg('无效用户')
                return
            }
            let user_id = global_data.webUser.id
            if (global_data.webUser.score !== undefined) {
                //打开网页
                window.open('https://service-cnqh87je-1301710088.gz.apigw.tencentcs.com/release/taobao_pay?user_id=' + user_id + '&cdkey=' + cdkey+'&version='+version)
                Swal.fire({
                    title: '充值且领取成功了吗?',
                    icon: 'question',
                    showDenyButton: true,
                    confirmButtonText: '是的',
                    denyButtonText: `没有`,
                }).then((result) => {
                    if (result.isConfirmed) {
                        verifyUser(user_id, email, nickName, loginId, personalUrlSuffix, loadIndex)
                        show_msg('用户信息已更新')
                    }
                })
            } else {
                show_msg('脚本未能加载成功')
            }
        }
        const cdk_config = document.createElement("button")
        cdk_config.innerText = '配 置 界 面'
        cdk_config.style = 'width:110px;background-color:rgb(158,28,119);color:white;border:none;border-radius:5px;height: 24px'
        cdk_config.onclick = function () {
            $("#imooc_mask")[0].hidden = false;
        }

        const last_score = document.createElement("span")
        last_score.innerText = '等待加载'
        last_score.style.color = 'blue'
        last_score.id = 'last_score'

        const lesson_progess = document.createTextNode("刷课进度:")
        const progress = document.createElement("span")
        //设置progress内容
        progress.innerText = '未开始'
        progress.style.color = 'red'
        progress.id = 'lesson_progess'
        let id = global_data.webUser.id
        const show_id = document.createElement("span")
        show_id.innerText = id + '__v' + version
        show_id.style = 'position:absolute;bottom:0px;font-size:12px;color:gray;left:28px;'
        show_id.id = 'show_id'
        // show_id.onclick = function () {
        //     if (global_data.verify_version) {
        //         clearTimeout(global_data.verify_version)
        //     }
        //     global_data.verify_version = setTimeout(
        //         function () {
        //             verify_version(true)
        //         }, 1000
        //     )
        //
        // }
        floatingWindow.appendChild(show_id);
        floatingWindow.appendChild(tip_1);
        floatingWindow.appendChild(last_score);
        floatingWindow.appendChild(document.createElement("br"));
        floatingWindow.appendChild(VIP);
        floatingWindow.appendChild(lesson_progess);
        floatingWindow.appendChild(progress);
        floatingWindow.appendChild(document.createElement("br"));
        floatingWindow.appendChild(tip_2);
        floatingWindow.appendChild(tip_3);
        floatingWindow.appendChild(recharge);
        floatingWindow.appendChild(cdk_config);
        // 将悬浮窗添加到页面中
        document.body.appendChild(floatingWindow);

        let mask = document.createElement('div')
        mask.id = 'imooc_mask'
        mask.hidden = true
        mask.style.position = 'fixed'
        mask.style.top = '0'
        mask.style.left = '0'
        mask.style.width = '100%'
        mask.style.height = '100%'
        mask.style.background = 'rgba(0, 0, 0, 0.5)'
        mask.style.zIndex = '201'

        // 创建内容层
        let content = document.createElement('div')
        content.style.position = 'fixed'
        content.style.top = '50%'
        content.style.left = '50%'
        content.style.transform = 'translate(-50%, -50%)'
        content.style.background = '#fff'
        content.style.padding = '20px'
        content.style.width = '400px'
        content.style.height = 'auto'
        content.innerHTML = `
        <div class="layui-input-group">
          <div class="layui-input-split layui-input-prefix">
            cdkey
          </div>
          <input type="text" style="width: 300px;" placeholder="请输入cdkey,不是6位数字！" class="layui-input" value="${storage_cdk}" id="cdk">
        </div>
        
        <div style="margin-top: 10px">
            <input type="checkbox" title="默认" id="use_cdk" ${use_cdkey ? 'checked' : ''}>使用cdkey(使用cdkey可以跨账号使用积分)
        </div>
        <!--<div style="margin-top: 10px">
            <input type="checkbox" title="默认" id="show_score" show_score ? 'checked' : ''>显示分数
        </div>-->
        <div style="margin-top: 10px">
            <input type="checkbox" title="默认" id="first_hide" ${first_hide ? 'checked' : ''}>开启时隐藏所有窗口（按ESC显示）
        </div>
        <div style="margin-top: 10px;color:red" id="mycdk"></div>
        <div style="margin-left: 250px;bottom:10%;margin-top: 10px">
          <button type="button" class="layui-btn layui-btn-normal layui-btn-radius" id="confirm_cdk">确认</button>
          <button type="button" class="layui-btn layui-btn-primary layui-btn-radius" id="cancel_cdk">取消</button>
        </div>
        `

        unsafeWindow['DATracker']['track'] = function () {
        }

        // 添加到页面
        mask.appendChild(content)
        document.body.appendChild(mask)

        if (unsafeWindow.location.href.indexOf("newExam") !== -1) {
            show_msg('新版考试只支持客观题，请确认后再使用，不补偿积分。')
        }
        $("#floatingWindow").draggable();

        let loadIndex = show_msg('iMooc加载中', {
            icon: 16,
            shade: 0.01
        });
        verifyUser(id, email, nickName, loginId, personalUrlSuffix, loadIndex)
        setTimeout(verify_version, 2000)
        $("#confirm_cdk").click(function () {
            GM_setValue('first_hide', $('#first_hide')[0].checked)
            let cdk = $('#cdk').val()
            cdk = cdk.replace(/[^a-zA-Z0-9]/g, '')
            let reg = /^[0-9]*$/
            if (reg.test(cdk) && cdk.length > 0) {
                Swal.fire({
                    imageUrl: 'https://imooc-1301710088.cos.ap-nanjing.myqcloud.com/cdk_tip.png',
                    imageAlt: '格式错误',
                    text: '此处应填写cdk，校验码使用方式如图所示。',
                })
                $('#cdk').val('')
                $('#use_cdk')[0].checked = false
                return;
            }
            GM_setValue('cdkey', cdk)
            GM_setValue('use_cdkey', $('#use_cdk')[0].checked)
            $("#imooc_mask")[0].hidden = true;
            setTimeout(function () {
                location.reload()
            }, 1000)
        })

        $("#cancel_cdk").click(function () {
            $("#imooc_mask")[0].hidden = true;
        })
        if (unsafeWindow.location.href.indexOf('newExam') === -1) {
            if (unsafeWindow.moocTermDto) {
                global_data.lesson_id = unsafeWindow.moocTermDto.id
            } else {
                global_data.lesson_id = unsafeWindow.termDto.id
            }
            load_lesson()
        }
        observe()
        GM_addStyle(`._2zscs {
        top: 20vh;
        right: 30vh;
        width: 350px;
        background: #fff;
        padding: 20px 16px;
        border: 1px solid rgba(0,0,0,.1);
        border-radius: 8px;
        box-shadow: 0 3px 8px 0 rgba(0,0,0,.05);
        position: fixed;
        z-index: 999;
        }`)
        GM_addStyle(`._1vkaQ {
        background-color: rgba(0,0,0,.04);
        padding-top: 5px;
        padding-bottom: 5px;
        padding-right: 10px;
        padding-left: 10px;
        margin: 3px;
        font-size: 12px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        }
        `)
        GM_addStyle(`.unit:hover .unit_button,.unit:hover .chapter_button {
        display: block;
        }
        .unit:hover{
        background-color: #DCF0E4;
        }
        .lesson:hover .lesson_button{
        display: block;
        }
        .unit_button, .chapter_button ,.lesson_button{
        display: none;
        width:80px;
        height:40px;
        border-radius: 5px;
        background:#DCF0E4;
        font-size: 10px;
        position:absolute;
        border-width: 1px;
        right:60%;
        }
        #j-anchorContainer{
        display: None;
        }
        `)
    })
});

function get_tid_and_type() {
    let _url = unsafeWindow.location.href
    let type = 0 //1为考试，0为作业
    if (_url.indexOf('eid') !== -1) {
        type = 1
    } else {
        type = 0
    }
    let paper_info = _url.replace(/\?/g, '&').match(/&id=(\d+)/)
    if (!paper_info) {
        show_msg('请检查是否在作业或者考试页面')
        begin_get_answer = false
        throw new Error('请检查是否在作业或者考试页面')
    }
    paper_info.push(type)
    return paper_info
}

async function get_aid(paper_info) {
    return new Promise(function (resolve, reject) {
        let tid = paper_info[1]
        let aid, aid_url = ''
        let aid_data = {}
        let csrckey = global_data.csrfkey
        if ((unsafeWindow.location.href).indexOf('hw') !== -1 || (unsafeWindow.location.href).indexOf('examSubjective') !== -1) {
            aid_url = 'https://www.icourse163.org/web/j/mocQuizRpcBean.getOpenHomeworkPaperDto.rpc?csrfKey=' + csrckey
            aid_data = JSON.stringify({
                'tid': tid,
                'evaluateId': null,
                'withStdAnswerAndAnalyse': false,
                'phase': 1,
                'aid': null
            })
        } else {
            aid_url = 'https://www.icourse163.org/web/j/mocQuizRpcBean.getOpenQuizPaperDto.rpc?csrfKey=' + csrckey
            aid_data = JSON.stringify({"tid": tid, "aid": 0, "withStdAnswerAndAnalyse": false})
        }
        GM.xmlHttpRequest({
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Origin': 'null'
            },
            url: aid_url,
            data: aid_data,
            method: 'POST',
            onload: function (aid_text) {
                aid_text = JSON.parse(aid_text.responseText)
                aid = aid_text.result?.aid
                const objectiveQList = aid_text.result?.objectiveQList
                const subjectiveQList = aid_text.result?.subjectiveQList
                global_data.submitJson = aid_text.result
                if (!aid) {
                    show_msg('操作过快')
                    begin_get_answer = false
                    $("#quickSubmit").attr("disabled", false)
                    throw new Error('获取aid失败')
                }
                resolve([aid, objectiveQList, subjectiveQList])
            }
        })
    })
}

function get_answer() {
    return new Promise(function (resolve, reject) {
        if ($(".totalScore.f-f0.j-scoreInfo").length > 0) {
            show_msg('该测试已经完成！')
            begin_get_answer = false
            $("#quickSubmit").attr("disabled", false)
            return
        }
        let personalUrlSuffix = global_data.webUser.personalUrlSuffix
        let userId = get_user_id()
        let _url = unsafeWindow.location.href
        if (_url.indexOf('ojhw') !== -1) {
            show_msg('暂不支持编程题')
            begin_get_answer = false
            throw new Error('暂不支持编程题')
        }
        const localtion_hash = window.location.hash
        if (localtion_hash.indexOf('content') !== -1) {
            show_msg('请检查是否在作业或者考试页面（随堂测验属于刷课部分不支持显示答案）')
            begin_get_answer = false
            throw new Error('不支持随堂测验')
        }
        if (_url.indexOf('newExam') !== -1) {
            aid = _url.match(/aid=(\d+)/)
            if (aid) {
                aid = aid[1]
            } else {
                show_msg('请检查是否在作业或者考试页面')
                begin_get_answer = false
                throw new Error('请检查是否在作业或者考试页面')
            }
            global_data.aid = aid
            tid = _url.match(/eid=(\d+)/)[1]
            GM.xmlHttpRequest({
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    'Accept': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Origin': 'null'
                },
                url: base_url + 'api/getAnswer',
                data: JSON.stringify({
                    tid,
                    aid,
                    userId,
                    cdkey,
                    personalUrlSuffix
                }),
                method: 'POST',
                onload: function (answer) {
                    answer = JSON.parse(answer.responseText)
                    resolve(answer)
                }
            })
        } else {
            let paper_info = get_tid_and_type()
            const tid = paper_info[1]
            get_aid(paper_info).then(
                function (args) {
                    if (args) {
                        const [aid, objectiveQList, subjectiveQList] = args
                        global_data.aid = aid
                        GM.xmlHttpRequest({
                            headers: {
                                'Content-Type': 'application/json;charset=UTF-8',
                                'Accept': 'application/json',
                                'Access-Control-Allow-Origin': '*',
                                'Origin': 'null'
                            },
                            url: base_url + 'api/getAnswer',
                            data: JSON.stringify({
                                tid,
                                aid,
                                userId,
                                cdkey,
                                personalUrlSuffix,
                                objectiveQList,
                                subjectiveQList
                            }),
                            method: 'POST',
                            onload: function (answer) {
                                answer = JSON.parse(answer.responseText)
                                resolve(answer)
                            }
                        })
                    } else {
                        show_msg('请检查是否在作业或者考试页面')
                    }
                }
            )
        }
    })
}

function get_user_id() {
    return global_data.webUser.id
}

function quickSubmit() {
    show_msg('正在提交试卷。。。')
    $("#quickSubmit").attr("disabled", true)
    get_answer().then(answers => {
        if (!answers) {
            return
        }
        global_data.webUser.score = answers.score
        $('#last_score').text(answers.score)
        if (answers.status !== 0) {
            show_msg(answers.msg)
            return
        }
        let submitJson = global_data.submitJson
        submitJson.submitType = 1
        submitJson.switchPageCount = null
        let submitAnswers = []
        let nowTime = Date.now()
        for (let i = 0; i < answers.questions.length; i++) {
            //随机生成30000-60000毫秒之间的时间
            let time = Math.floor(Math.random() * (60000 - 30000 + 1) + 30000)
            nowTime += time
            let qAnswer = {
                'qid': submitJson.objectiveQList[i].id,
                'type': answers.questions[i].qtype,
                'optIds': answers.questions[i].optIds,
                'time': nowTime
            }
            if (answers.questions[i].qtype === 3) {
                qAnswer['content'] = {
                    'content': answers.questions[i].answer.split(' (或) ')[0],
                }
            }
            submitAnswers.push(qAnswer)
        }
        submitJson.answers = submitAnswers
        let submitData = JSON.stringify({
            'paperDto': submitJson,
            'preview': false,
        })
        GM.xmlHttpRequest({
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Origin': 'null'
            },
            url: 'https://www.icourse163.org/web/j/mocQuizRpcBean.submitAnswers.rpc?csrfKey=' + global_data.csrfkey,
            data: submitData,
            method: 'POST',
            onload: function (response) {
                let res = JSON.parse(response.responseText)
                if (res.result === 200) {
                    show_msg('提交成功')
                    setTimeout(function () {
                        unsafeWindow.history.back()
                    }, 1000)
                } else {
                    show_msg('提交失败')
                }
            }
        })
    })
}

function show_answer() {
    if (global_data.webUser.ban) {
        show_msg('无效用户')
        return
    }
    const show_answer = !$("#floatingWindow")[0].hidden
    $("#quickSubmit").remove()
    if (begin_get_answer)
        return
    if ($(".imooc_answer").length !== 0) {
        return
    }
    let getAnswerMsg = show_msg('正在获取答案。。。')
    begin_get_answer = true
    get_answer().then(answers => {
        layer.close(getAnswerMsg)
        begin_get_answer = false
        if (answers) {
            global_data.webUser.score = answers.score
            $('#last_score').text(answers.score)
            if (answers.status !== 0) {
                show_msg(answers.msg)
                return
            }
            let location_dom
            const new_exam = unsafeWindow.location.href.indexOf('newExam') !== -1
            if (answers["type"] === 2) {
                // 如果隐藏模式关闭 显示答案和解析卡
                if (show_answer) {
                    // 显示答案
                    let choices = ''
                    for (let i = 0; i < answers.questions.length; i++) {
                        let html = '<br><p style=\'color: brown\' class="imooc_answer">解析:</p><div>'
                        let answer = answers.questions[i].answer
                        let question_type = answers.questions[i].qtype
                        if (question_type !== 3) {
                            let answerKeys = ''
                            for (const answerKey in answer) {
                                html += "<div style=\"display: flex\"><span>&nbsp;&nbsp;&nbsp;&nbsp;" + answerKey + ".&nbsp;&nbsp;</span><span>" + answer[answerKey] + "</span></div>"
                                answerKeys += answerKey
                            }
                            choices += "<div class='_1vkaQ' type='2'> " + (i + 1).toString() + '：' + answerKeys + "</div>"
                        } else {
                            choices += "<div class='_1vkaQ' type='3'>" + (i + 1) + '：' + answer + "</div>"
                            html += "<span>&nbsp;&nbsp;&nbsp;&nbsp;" + answer + "</span>"
                        }
                        if (!new_exam) {
                            location_dom = $(".f-richEditorText.j-richTxt").eq(i)
                            location_dom.append("<div class='imooc_answer'>" + html + "</div>")
                        } else {
                            location_dom = $("._2LgP5")[i]
                            $(location_dom).append(html)
                        }
                    }
                    // 显示解析卡
                    $(".j-title.f-fl,._1oSxJ").append("<div class='_2zscs'>" +
                        "<div style='margin-bottom: 13px;margin-left: 3px;'><span>解析卡</span></div>" +
                        "<div>" +
                        "<div style='display: flex;flex-wrap: wrap;'>" +
                        choices +
                        "</div>" +
                        "</div>" +
                        "</div>")
                    $("._2zscs").draggable()

                    $("._1vkaQ").click(function (e) {
                        const info = e.target.outerText.split('：')
                        const idx = parseInt(info[0])
                        const answer = info[1]
                        const aim_quesiton = $(".m-data-lists.f-cb.f-pr.j-data-list,.ant-form.ant-form-horizontal").children().eq(idx - 1)
                        aim_quesiton[0].scrollIntoView({
                            behavior: "smooth"
                        })
                        if (e.target.getAttribute("type") === '3') {
                            copyToClipboard(answer)
                            show_msg('答案已复制');
                        }

                    })
                } else {
                    let questionDoms, choiceDomName, inputDomName, radioDomName
                    if (!new_exam) {
                        questionDoms = $(".m-data-lists.f-cb.f-pr.j-data-list")[0].childNodes
                        choiceDomName = ".choices.f-cb"
                    } else {
                        questionDoms = $(".ant-form.ant-form-horizontal")[0].childNodes
                        choiceDomName = ".ant-radio-group.ant-radio-group-outline,.ant-checkbox-group"
                    }
                    // 隐藏答案
                    for (let i = 0; i < answers.questions.length; i++) {
                        let answer = answers.questions[i].answer
                        let question_type = answers.questions[i].qtype
                        let questionDom = questionDoms[i]
                        let answerIndexs = []
                        if (question_type !== 3) {
                            let choiceDom = questionDom.querySelectorAll(choiceDomName)[0]
                            for (const answerKey in answer) {
                                // 把answerKey的ABCD转为0123
                                let answeIndex = answerKey.charCodeAt() - 65
                                answerIndexs.push(answeIndex)
                            }
                            for (let childDomIndex = 0; childDomIndex < choiceDom.children.length; childDomIndex++) {
                                if (!answerIndexs.includes(childDomIndex)) {
                                    choiceDom.children[childDomIndex].getElementsByTagName("input")[0].disabled = true
                                }
                            }
                        } else {
                            let inputDom = questionDom.getElementsByTagName("textarea")[0]
                            inputDom.addEventListener('mousedown', function (event) {
                                copyToClipboard(answer)
                            });
                        }
                    }
                }

            } else if (answers["type"] === 3) {
                if (!new_exam) {
                    for (let i = 0; i < answers.questions.length; i++) {
                        location_dom = $('.m-homeworkQuestionList').children().eq(i).children().eq(0).children().eq(1).children().eq(2)
                        location_dom.append("<div class='imooc_answer'><br><span style='color: brown'>解析:</span>" + answers.questions[i].answer + "</div>")
                    }
                } else {
                    for (let i = 0; i < answers.questions.length; i++) {
                        location_dom = $("._2LgP5")[i]
                        location_dom.insertAdjacentHTML('beforeend', "<div class='imooc_answer'><br><span style='color: brown'>解析:</span>" + answers.questions[i].answer + "</div>");
                    }
                }
            }
        }
    })
}

//*****************************************************************************************************************************//

function update_progress(index) {
    let progress = (index + 1) / global_data.total_aim * 100
    //保留两位小数
    progress = progress.toFixed(2)
    $('#lesson_progess').text(progress + '%')
}

function save_moc_ccontent_learn(data, csrfkey, index, url = "https://www.icourse163.org/web/j/courseBean.saveMocContentLearn.rpc?csrfKey=",) {
    return new Promise((resolve, reject) => {
        let [Auth_Signature, timestamp, o] = get_Auth_Signature(data)
        GM.xmlHttpRequest({
            url: url + csrfkey,
            method: 'post',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'timestamp': timestamp,
                'Auth-Signature': Auth_Signature,
                'Nonce': o,
                'System': 'v1',
                'Edu-Script-Token': global_data.csrfkey,
                'Origin': 'null'
            },
            data: data,
            onload: function (response) {
                update_progress(index)
                try {
                    let res = JSON.parse(response.responseText)
                    if (res.code !== 0) {
                        unsafeWindow.fail_list.push({'params': [data, csrfkey, url]})
                    }
                } catch (e) {

                }
                resolve()
            }
        })
    })
}

function get_Auth_Signature(data) {
    let nonce = global_data.webUser.nonce
    let timestamp = new Date().getTime() + studyTime
    let o = nonce.slice(-4)
    nonce = nonce.slice(0, -4)
    let Auth_Signature = unsafeWindow.CryptoJS.MD5(data + o + timestamp + nonce).toString().toLocaleUpperCase()
    return [Auth_Signature, timestamp, o]
}


function pass_video(unit, lession_id, csrfkey, index) {
    return new Promise((resolve, reject) => {
        let date=new Date().getTime().toString()
        let sign=unsafeWindow.CryptoJS.MD5(unit.id+'1'+date+'881mooc'+global_data.webUser.id)
        const resourceData = `bizId=${unit.id}&bizType=1&contentType=1&sign=${sign}&timestamp=${date}`
        GM.xmlHttpRequest({
            url: 'https://www.icourse163.org/web/j/resourceRpcBean.getResourceTokenV2.rpc?csrfKey=' + csrfkey,
            method: 'post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Origin': 'null'
            },
            data: resourceData,
            onload: function (response) {
                const res = JSON.parse(response.responseText)
                const video_duration = res.result.videoSignDto.duration
                const learnVideoTime = res.result.learnVideoTime
                if (video_duration - learnVideoTime < 60) {
                    resolve()
                    return
                }
                let data = JSON.stringify({
                    'dto': {
                        'unitId': unit.id,
                        'finished': false,
                        'index': 1,
                        'duration': 60000,
                        'courseId': unsafeWindow.courseDto.id,
                        'lessonId': unit.lessonId,
                        'videoId': unit.contentId,
                        'termId': lession_id,
                        'userId': global_data.webUser.id,
                        'contentType': 1,
                        'action': 'LEARN_TIME_COUNT',
                        'videoTime': video_duration,
                        'learnedVideoTimeCount': video_duration,
                    },
                })
                save_moc_ccontent_learn(data, csrfkey, index).then(
                    () => {
                        let duration = Math.floor(Math.random() * (3e5 - 6e4 + 1) + 6e4) + video_duration;
                        studyTime += duration
                        resolve()
                    }
                )
            }
        })

    })
}

function pass_rich_text(unit, csrfkey, index) {
    return new Promise((resolve, reject) => {
        let data = JSON.stringify({"dto": {"unitId": unit.id, "finished": true, "contentType": 4}})
        //随机生成3e5到4e5之间的整数
        let duration = Math.floor(Math.random() * (3e5 - 6e4 + 1) + 6e4);
        studyTime += duration
        save_moc_ccontent_learn(data, csrfkey, index).then(
            () => {
                resolve()
            }
        )
    })
}

function pass_ppt(unit, csrfkey, index) {
    return new Promise((resolve, reject) => {
        let data = {
            'callCount': '1',
            'scriptSessionId': '${scriptSessionId}190',
            'c0-scriptName': 'CourseBean',
            'c0-methodName': 'getLessonUnitLearnVo',
            'c0-id': '0',
            'c0-param0': 'number:' + unit.contentId,
            'c0-param1': 'number:3',
            'c0-param2': 'number:0',
            'c0-param3': 'number:' + unit.id,
            'batchId': Date.now() + studyTime
        }
        let msg = $.ajax({
            url: 'https://www.icourse163.org/dwr/call/plaincall/CourseBean.getLessonUnitLearnVo.dwr',
            type: 'post',
            async: false,
            data: data,
        }).responseText
        let pageCount = msg.match(/textPages:(\d+),/)
        let learnedPosition = msg.match(/learnedPosition:(\d+),/)
        if (learnedPosition) {
            learnedPosition = +learnedPosition[1]
        } else {
            learnedPosition = 0
        }
        if (!pageCount) {
            let textOrigUrl = msg.match(/textOrigUrl:"(.*?)",/);
            textOrigUrl = textOrigUrl[1]
            get_ppt_pages(textOrigUrl).then((count) => {
                pageCount = count
            })
        } else {
            pageCount = +pageCount[1]
        }
        if (pageCount === learnedPosition) {
            resolve()
            return
        }
        let duration = Math.floor(Math.random() * (2e4 - 1e4 + 1) + 1e4) * pageCount;
        data = JSON.stringify({
            "dto":
                {
                    "unitId": unit.id,
                    "finished": false,
                    "contentType": 3,
                    "index": 0,
                    "pageNum": 0,
                    "courseId": unsafeWindow.courseDto.id,
                    "lessonId": unit.lessonId,
                    "termId": unit.termId,
                    "lastLearnTime": Date.now() - studyTime,
                    "learnedVideoTimeCount": 0
                }
        })
        studyTime += duration
        save_moc_ccontent_learn(data, csrfkey, index).then(() => {
            setTimeout(() => {
                data = JSON.stringify({
                    "dto":
                        {
                            "unitId": unit.id,
                            "finished": false,
                            "contentType": 3,
                            "index": pageCount,
                            "pageNum": pageCount,
                            "courseId": unsafeWindow.courseDto.id,
                            "lessonId": unit.lessonId,
                            "termId": unit.termId,
                            "lastLearnTime": Date.now() - studyTime,
                            "learnedVideoTimeCount": duration
                        }
                })
                save_moc_ccontent_learn(data, csrfkey, index).then(() => {
                    resolve()
                })
            }, 1500)
        })
    })
}


function pass_discuss(unit, csrfkey, index) {
    return new Promise((resolve, reject) => {
        if (global_data.pass_discuss) {
            resolve()
            return;
        }
        if (global_data.get_max_reply) {
            update_progress(index)
            resolve()
            return
        }
        let data = JSON.stringify({"dto": {"unitId": unit.id, "finished": true, "contentType": 6}})
        let duration = Math.floor(Math.random() * (3e5 - 6e4 + 1) + 6e4);
        studyTime += duration
        if (global_data.discuss) {
            GM.xmlHttpRequest({
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                    'Origin': 'null'
                },
                url: 'https://www.icourse163.org/mob/forum/getPostByUnitId/v1',
                method: 'POST',
                data: 'lessonUnitId=' + unit.id,
                onload: function (result) {
                    result = JSON.parse(result.responseText)
                    let replys = result['results']['newReplyList']
                    if (replys.length === 0) {
                        light_up_discuss(data, unit, csrfkey, index).then(
                            () => {
                                resolve()
                            }
                        )
                        return;
                    }
                    //取replys中每一项的content最长的一条
                    let max_length = 0
                    let max_index = 0
                    for (let i = 0; i < replys.length; i++) {
                        if (replys[i].content.length > max_length) {
                            max_length = replys[i].content.length
                            max_index = i
                        }
                    }
                    let reply = replys[max_index]['content']
                    if (reply === '【图片】') {
                        light_up_discuss(data, unit, csrfkey, index).then(
                            () => {
                                resolve()
                            }
                        )
                        return;
                    }
                    $.ajax({
                        url: 'https://www.icourse163.org/dwr/call/plaincall/MocForumBean.addReply.dwr',
                        async: false,
                        type: 'post',
                        data: {
                            'callCount': '1',
                            'scriptSessionId': '${scriptSessionId}190',
                            'c0-scriptName': 'MocForumBean',
                            'c0-methodName': 'addReply',
                            'c0-id': 0,
                            'c0-e1': 'number:' + unit.contentId,
                            'c0-e2': 'string:' + reply,
                            'c0-e3': 'number:0',
                            'c0-param0': 'Object_Object:{postId:reference:c0-e1,content:reference:c0-e2,anonymous:reference:c0-e3}',
                            'c0-param1': 'Array:[]',
                            'batchId': Date.now() + studyTime,
                        },
                        success: function (e) {
                            if (e.indexOf('_remoteHandleException') !== -1) {
                                show_msg('今日回复次数已达上限')
                                resolve()
                                return
                            }
                            save_moc_ccontent_learn(data, csrfkey, index).then(() => {
                                resolve()
                            })
                        },
                        error: function () {
                            resolve()
                        }
                    })

                }
            })
        } else {
            light_up_discuss(data, unit, csrfkey, index).then(
                () => {
                    resolve()
                }
            )
        }
    })
}

function light_up_discuss(data, unit, csrfkey, index) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: 'https://www.icourse163.org/dwr/call/plaincall/MocForumBean.addReply.dwr',
            async: false,
            type: 'post',
            data: {
                'callCount': '1',
                'scriptSessionId': '${scriptSessionId}190',
                'c0-scriptName': 'MocForumBean',
                'c0-methodName': 'addReply',
                'c0-id': 0,
                'c0-e1': 'number:' + unit.contentId,
                'c0-e2': 'string:123',
                'c0-e3': 'number:0',
                'c0-param0': 'Object_Object:{postId:reference:c0-e1,content:reference:c0-e2,anonymous:reference:c0-e3}',
                'c0-param1': 'Array:[]',
                'batchId': Date.now() + studyTime
            },
            success: function (res) {
                setTimeout(function () {
                    try {
                        const delete_id = res.match(/,id:(\d+)/)[1]
                        $.ajax({
                            url: 'https://www.icourse163.org/dwr/call/plaincall/MocForumBean.deleteReply.dwr',
                            async: false,
                            type: 'post',
                            data: {
                                'callCount': '1',
                                'scriptSessionId': '${scriptSessionId}190',
                                'c0-scriptName': 'MocForumBean',
                                'c0-methodName': 'deleteReply',
                                'c0-id': 0,
                                'c0-param0': 'number:' + unit.contentId,
                                'c0-param1': 'number:' + delete_id,
                                'batchId': Date.now() + studyTime
                            }
                        })
                    } catch (e) {
                        global_data.get_max_reply = true
                        show_msg('今日回复数已达上限或未开启讨论区')
                    }
                }, 1000)
                save_moc_ccontent_learn(data, csrfkey, index).then(() => {
                    resolve()
                })
            }
        })
    })
}

function do_test(unit, csrfkey, index) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: 'https://www.icourse163.org/dwr/call/plaincall/CourseBean.getLessonUnitLearnVo.dwr',
            async: false,
            type: 'post',
            data: {
                'callCount': '1',
                'scriptSessionId': '${scriptSessionId}190',
                'c0-scriptName': 'CourseBean',
                'c0-methodName': 'getLessonUnitLearnVo',
                'c0-id': '0',
                'c0-param0': 'number:' + unit.contentId,
                'c0-param1': 'number:5',
                'c0-param2': 'number:0',
                'c0-param3': 'number:' + unit.id,
                'batchId': Date.now() + studyTime
            }
        })
        let aid = unsafeWindow.s0.aid
        let objectiveQList = unsafeWindow.s0.objectiveQList
        let anser_paper = {
            "paperDto": {
                "aid": aid,
                "allowSwitchPageCount": null,
                "analyseEnable": null,
                "answererId": null,
                "answers": [],
                "autoSubmit": false,
                "correctSubject": false,
                "deadline": null,
                "deviceType": null,
                "evaluateEnd": null,
                "evaluateJudgeType": null,
                "evaluateNeedTrain": null,
                "evaluateStart": null,
                "evaluateVo": null,
                "examId": null,
                "examTime": null,
                "examType": null,
                "ip": null,
                "isCorrectSubject": null,
                "memberId": null,
                "name": null,
                "nickname": null,
                "objectiveQList": [],
                "objectiveScore": null,
                "objectiveTotalScore": null,
                "questions": null,
                "realName": null,
                "scoreReleaseTime": null,
                "scoreReleaseType": null,
                "showAnalysis": null,
                "startTime": null,
                "studentNumber": null,
                "subjectiveQList": [],
                "subjectiveScore": null,
                "subjectiveTotalScore": null,
                "submitCount": null,
                "submitStatus": unsafeWindow.s0.submitStatus,
                "submitTime": null,
                "submitType": null,
                "switchPageCount": null,
                "tid": unit.contentId,
                "tname": null,
                "totalScore": null,
                "tryTime": null,
                "type": 6,
                "usedTryCount": null
            },
            "preview": false
        }
        anser_paper.paperDto.objectiveQList = objectiveQList
        let answers = []
        for (let obj of objectiveQList) {
            //type 1单选 2多选 3填空 4判断
            let type = obj.type
            let answer = {type}
            answer.qid = obj.id
            answer.time = Date.now()
            switch (type) {
                case 1:
                case 2:
                case 4:
                    //单选 或 多选
                    let optIds = []
                    let optionDtos = obj.optionDtos
                    for (let option of optionDtos) {
                        if (option.answer) {
                            optIds.push(option.id)
                        }
                    }
                    answer.optIds = optIds
                    answers.push(answer)
                    break;
                case 3:
                    //填空
                    let stdAnswer = obj.stdAnswer
                    answer.content = {content: stdAnswer}
                    answers.push(answer)
                    break;
                default:
                    break;
            }
        }
        anser_paper.paperDto.answers = answers
        let anser_paper_data = JSON.stringify(anser_paper)
        let duration = Math.floor(Math.random() * (3e5 - 6e4 + 1) + 6e4);
        studyTime += duration
        save_moc_ccontent_learn(anser_paper_data, csrfkey, index, 'https://www.icourse163.org/web/j/mocQuizRpcBean.submitAnswers.rpc?csrfKey=').then(
            () => {
                resolve()
            }
        )
    })
}

function pass_test(unit, csrfkey, index) {
    return new Promise((resolve, reject) => {
        let fake_data = JSON.stringify({
            "dto": {
                "unitId": unit.id,
                "finished": true,
                "contentType": 5
            }
        })
        save_moc_ccontent_learn(fake_data, csrfkey, index).then(() => {
            resolve()
        })
    })
}


function iterate_func(aim_list, j = 0) {
    if (aim_list.length > 0) {
        let aim = aim_list.shift()
        aim.func(...aim.params, j++).then(
            () => {
                setTimeout(() => {
                    iterate_func(aim_list, j)
                }, 1500)
            }
        )
    } else {
        const fail_count = global_data.fail_list.length
        global_data.total_aim = fail_count
        show_msg('开始重新提交失败项，预计耗时' + fail_count * 2 + '秒，请耐心等待完成！')
        for (let i = 0; i < fail_count; i++) {
            [data, csrfkey, url] = global_data.fail_list[i].params
            setTimeout(function (data, csrfkey, i, url) {
                let duration = Math.floor(Math.random() * (3e5 - 6e4 + 1) + 6e4);
                studyTime += duration
                save_moc_ccontent_learn(data, csrfkey, i, url)
            }, 2000 * i, data, csrfkey, i, url)
        }
        setTimeout(function () {
            global_data.webUser.is_learning = false
            lesson_progess.style.color = 'green'
            lesson_progess.innerText = '已完成'
            global_data.send_discuss = false
            global_data.pass_discuss = false
            show_msg('刷课已完成！')
        }, 2000 * fail_count - 2)
    }
}

async function start_pass(aim_list) {
    let lession_id = global_data.lesson_id
    if (aim_list.length === 0) {
        show_msg('没有需要学习的内容')
        global_data.webUser.is_learning = false
        lesson_progess.style.color = 'green'
        lesson_progess.innerText = '已完成'
        global_data.send_discuss = false
        global_data.pass_discuss = false
        return
    }
    lesson_progess.style.color = 'blue'
    //获取aim_list中func种类
    let lesson_list = []
    for (let i = 0; i < aim_list.length; i++) {
        let func = aim_list[i].func
        if (!lesson_list.includes(func.name) && func.name !== 'pass_test') {
            lesson_list.push(func.name)
        }
    }
    let need_score = 0
    for (const lesson_name of lesson_list) {
        if (lesson_name === 'pass_video') {
            need_score += 2
        } else if (lesson_name === 'pass_discuss' || lesson_name === 'pass_rich_text') {
        } else {
            need_score += 1
        }
    }
    let can_skip_lsesson = await verify_lessons(need_score, lession_id)
    if (!can_skip_lsesson) {
        show_msg('需要' + need_score + '积分，积分不足。')
        return
    }
    global_data.webUser.is_learning = true
    global_data.total_aim = aim_list.length
    global_data.fail_list = []
    const need_second = aim_list.length * 1.5
    if (global_data.webUser.lesson_vip !== 1) {
        show_msg('开始刷课,消耗' + need_score + '积分，预计耗时' + need_second + '秒，请耐心等待完成！')
    } else {
        show_msg('开始刷课,VIP用户不消耗积分！预计耗时' + need_second + '秒，请耐心等待完成！')
    }
    iterate_func(aim_list)
}

function get_ppt_pages(url) {
    return new Promise((resolve, reject) => {
        pdfjsLib.getDocument({url: url}).promise.then(function (pdf) {
            let numPages = pdf.numPages;
            resolve(numPages)
        });
    })
}

async function handle_chapter(chapters, aim_list, choice_dict) {
    for (const chapter of chapters) {
        let lessons = chapter.lessons
        if (lessons) {
            await handle_lession(lessons, aim_list, choice_dict)
        }
    }
}

async function handle_lession(lessons, aim_list, choice_dict) {
    for (let content of lessons) {
        let units = content.units
        await handle_units(units, aim_list, choice_dict)
    }
}

async function handle_units(units, aim_list, choice_dict) {
    let lession_id = global_data.lesson_id
    let csrfkey = global_data.csrfkey
    for (let unit of units) {
        if (!global_data.send_discuss && unit.contentType === 6 && unit.viewStatus !== 5) {
            await Swal.fire({
                title: '是否发表讨论？',
                icon: 'question',
                showCancelButton: true,
                showDenyButton: true,
                confirmButtonText: '发表讨论',
                denyButtonText: '仅点亮图标',
                cancelButtonText: '不刷讨论',
            })
                .then((result) => {
                    if (result.isConfirmed) {
                        global_data.discuss = true
                    }
                    global_data.send_discuss = true
                    if (result.isDismissed) {
                        global_data.pass_discuss = true
                    }
                })
        }
        switch (unit.contentType) {
            case 1:
                //视频
                if (choice_dict.pass_video || choice_dict.pass_all)
                    aim_list.push({'func': pass_video, 'params': [unit, lession_id, csrfkey]})
                break;
            case 3:
                //ppt文档
                if (choice_dict.pass_ppt || choice_dict.pass_all) {
                    aim_list.push({'func': pass_ppt, 'params': [unit, csrfkey]})
                }
                break
            case 4 :
                //富文本
                if (unit.viewStatus === 5)
                    continue
                if (choice_dict.pass_rich_text || choice_dict.pass_all)
                    aim_list.push({'func': pass_rich_text, 'params': [unit, csrfkey]})
                break;
            case 5:
                //测验
                if (choice_dict.do_test || choice_dict.pass_all) {
                    aim_list.push({'func': do_test, 'params': [unit, csrfkey]})
                    aim_list.push({'func': pass_test, 'params': [unit, csrfkey]})
                }
                break;
            case 6:
                //讨论
                if (unit.viewStatus === 5)
                    continue
                if ((choice_dict.pass_discuss || choice_dict.pass_all) && !global_data.pass_discuss) {
                    aim_list.push({'func': pass_discuss, 'params': [unit, csrfkey]})
                }
                break;
            default:
                break;
        }
    }
}

async function get_all_lseeion() {
    const lesson_progess = $('#lesson_progess')[0]
    lesson_progess.style.color = 'blue'
    lesson_progess.innerText = '初始化'
    let aim_list = []
    let choice_dict = global_data.webUser.choice_dict
    global_data.send_discuss = false
    await handle_units(global_data.units, aim_list, choice_dict)
    await start_pass(aim_list)
}

function verify_lessons(need_score, lession_id) {
    return new Promise(function (resolve, reject) {
        let personalUrlSuffix = global_data.webUser.personalUrlSuffix
        GM.xmlHttpRequest({
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Origin': 'null'
            },
            url: base_url + 'api/verifySkipLessons',
            data: JSON.stringify({
                termId: lession_id,
                userId: global_data.webUser.id,
                personalUrlSuffix,
                cdkey,
                need_score: need_score > 0 ? need_score : 10
            }),
            method: 'POST',
            onload: function (result) {
                result = JSON.parse(result.responseText)
                if (result.status === 0) {
                    global_data.webUser.nonce = result.nonce
                    global_data.webUser.score = result.score
                    $('#last_score').text(result.score)
                    resolve(true)
                } else {
                    global_data.webUser.score = result.score
                    $('#last_score').text(result.score)
                    show_msg(result.msg)
                    throw new Error(result.msg)
                }
            }
        })

    })
}

function curremt_unit_index() {
    const li = $(".f-fl.current")[0]
    // 获取li的data-id属性
    const li_id = li.getAttribute("data-id")
    let current_unit_index = 0
    for (let i = 0; i < global_data.units.length; i++) {
        if (global_data.units[i].id.toString() === li_id) {
            current_unit_index = i
            break
        }
    }
    return current_unit_index
}

function get_lesson() {
    let next_unit = null
    for (let i = global_data.current_unit_index + 1; i < global_data.units.length; i++) {
        if (global_data.units[i].viewStatus !== 5 && global_data.units[i].contentType !== 6) {
            global_data.current_unit_index = i
            next_unit = global_data.units[i]
            break
        }
    }
    return next_unit
}

function goto_next_href() {
    if (!global_data.slow) {
        return
    }
    const loc = unsafeWindow.location.href
    const next_unit = get_lesson()
    unsafeWindow.location.href = loc.split('#')[0] + '#/learn/content'
    lesson_progess.innerText = '首 页'
    if (next_unit === null) {
        clearInterval(global_data.check_handle)
        clearInterval(global_data.interval_check)
        global_data.slow = false
        lesson_progess.style.color = 'red'
        lesson_progess.innerText = '未开始'
        Swal.fire(
            {
                title: '刷课已完成！',
                icon: 'success',
            }
        )
        return
    }
    global_data.current_unit = next_unit
    const lessonId = next_unit.lessonId
    const id = next_unit.id
    const url = loc.split('#')[0] + `#/learn/content?type=detail&id=${lessonId}&cid=${id}`
    setTimeout(function () {
        unsafeWindow.location.href = url
    }, 2000)

}

function handle_video() {

}

function handle_discuss() {
    if (!global_data.slow) {
        return
    }
    global_data.last_url = unsafeWindow.location.href
    goto_next_href()
}

function handle_exam() {
    if (!global_data.slow) {
        return
    }
    global_data.last_url = unsafeWindow.location.href
    goto_next_href()
}

function _C(element) {
    element.id = 'globalScoreLockBtn'
    element.click()
    element.removeAttribute("id");
}

function handle_ppt() {
    global_data.last_url = unsafeWindow.location.href
    if (!global_data.slow) {
        return
    }
    const ppt_slider = $(".ux-edu-pdfthumbnailviewer.f-pa.j-body")
    const a_list = ppt_slider[0].querySelectorAll('a')

    function click_a(index) {
        if ($(".ux-edu-pdfthumbnailviewer.f-pa.j-body").length === 0) {
            global_data.slow = false
            lesson_progess.style.color = 'red'
            lesson_progess.innerText = '未开始'
            return
        }
        _C(a_list[index])
        const random_time = Math.floor(Math.random() * 1000) + 2500
        setTimeout(function () {
            if (index < a_list.length - 1) {
                click_a(++index)
            } else {
                goto_next_href()
            }
        }, random_time)
    }

    let current_page = $(".ux-h5pdfreader_container_footer_pages_in").val()
    click_a(current_page - 1)

}

function handle_txt() {
    if (!global_data.slow) {
        return
    }
    global_data.last_url = unsafeWindow.location.href
    goto_next_href()
}

function slow_skip_lesson(tip = true) {
    if (global_data.slow || global_data.webUser.ban) {
        return
    }
    if (unsafeWindow.location.href.indexOf('type=detail') === -1) {
        Swal.fire({
            title: '请到课程页面后再开始挂机刷课!',
            timer: 5000,
            timerProgressBar: true,
        })
        return;
    }
    global_data.current_unit_index = curremt_unit_index()
    global_data.current_unit = global_data.units[global_data.current_unit_index]
    global_data.slow = true
    global_data.check_handle = null
    global_data.check_handle = setInterval(function () {
        const current_url = unsafeWindow.location.href
        const last_url = global_data.last_url
        if (current_url !== last_url && current_url.indexOf('type=detail') !== -1 && $(".u-learnBCUI.f-cb")) {
            switch (global_data.current_unit.contentType) {
                case 1:
                    //视频
                    lesson_progess.innerText = '视 频'
                    break;
                case 3:
                    //ppt文档
                    lesson_progess.innerText = '文 档'
                    break
                case 4 :
                    //富文本
                    lesson_progess.innerText = '富文本'
                    handle_txt()
                    break;
                case 5:
                    //测验
                    lesson_progess.innerText = '测 验'
                    handle_exam()
                    break;
                case 6:
                    //讨论
                    lesson_progess.innerText = '讨 论'
                    handle_discuss()
                    break;
                default:
                    break;
            }
        }

        if (document.querySelector('video') && document.querySelector('video').id !== global_data.video_id) {
            global_data.last_url = unsafeWindow.location.href
            let video_handle = document.querySelector('video')
            video_handle.play()
            video_handle.muted = true

            function listen_pause() {
                video_handle.play()
            }

            video_handle.removeEventListener('pause', listen_pause)
            video_handle.onpause = listen_pause
            global_data.video_id = video_handle.id
        }
        if ($(".ux-edu-pdfthumbnailviewer.f-pa.j-body").length > 0 && $(".ux-edu-pdfthumbnailviewer.f-pa.j-body")[0].querySelectorAll('a').length > 0 && current_url !== last_url) {
            handle_ppt()
            global_data.last_url = unsafeWindow.location.href
        }
        if ($(".playEnd.f-f0.f-pa").length > 0) {
            goto_next_href()
        }
    }, 1000)
    global_data.interval_check = null
    global_data.interval_check = setInterval(function () {
        const loc = unsafeWindow.location.href
        if (loc.indexOf("learn/content") === -1) {
            global_data.slow = false
            lesson_progess.style.color = 'red'
            lesson_progess.innerText = '未开始'
            clearInterval(global_data.interval_check)
            clearInterval(global_data.check_handle)
        }
    }, 1000)
    if (tip)
        Swal.fire({
            title: '正在挂机刷课，请勿手动切换!',
            timer: 5000,
            timerProgressBar: true,
        })
    lesson_progess.style.color = 'blue'
    lesson_progess.innerText = '挂机中'
}

async function skip_lesson() {
    if (global_data.webUser.is_learning || global_data.webUser.ban) {
        return
    }
    let choice = await Swal.fire({
        title: '选择要刷的内容',
        input: 'text',
        inputLabel: '视频 -------------------------> 1 (2积分,赠送富文本和讨论)' +
            '\n文档 -------------------------> 2 (1积分)' +
            '\n测验 -------------------------> 3 (1积分)' +
            '\n全部 -------------------------> 0 (自动计算积分)' +
            '\n程序会自动计算所需积分' +
            '\n如13为刷视频、富文本、讨论和测验,但课程中没有测验则共需2积分',
        inputValue: 0,
        showCancelButton: true,
        inputValidator: (value) => {
            // 判断输入的只包含0123
            if (!/^[0-3]+$/.test(value)) {
                return '请输入正确的内容!'
            }
        }
    })
    if (choice.isConfirmed) {
        choice = choice.value
    } else {
        return
    }
    //对choice去重
    choice = [...new Set(choice)]
    if (choice.indexOf('0') !== -1) {
        await Swal.fire({
            title: '确定要刷全部内容吗？',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '确认',
            cancelButtonText: '取消',
        }).then((result) => {
            if (result.isConfirmed) {
                choice = ['1', '2', '3']
            } else {
                throw new Error('已取消')
            }
        })
    }
    let choice_dict = {}
    for (let choiceElement of choice) {
        switch (choiceElement) {
            case '1':
                choice_dict.pass_video = true
                choice_dict.pass_rich_text = true
                choice_dict.pass_discuss = true
                break;
            case '2':
                choice_dict.pass_ppt = true
                break;
            case '3':
                choice_dict.do_test = true
                break;
        }
    }
    global_data.webUser.choice_dict = choice_dict
    show_msg('开始获取课程信息')
    await get_all_lseeion()

}

//*****************************************************************************************************************//

function evaluate(eid, tid, qid_list, new_list, comment) {
    let data0 =
        `callCount=1
scriptSessionId=\${scriptSessionId}190
httpSessionId=${global_data.csrfkey}
c0-scriptName=MocEvaluateBean
c0-methodName=submitSubmissionEvaluate
c0-id=0
c0-e1=number:${eid}
c0-e2=number:${tid}\n`
    let data1 = '', e3 = 'c0-e3=Array:['
    let n = 4;
    for (let i = 0; i < qid_list.length; i++) {
        e3 += `reference:c0-e${n},`
        let k = new_list[i].length * 3
        data1 += `c0-e${n}=Object_Object:{answerCanViewComment:reference:c0-e${n + 1},jitems:reference:c0-e${n + 2},lectorAnswer:reference:c0-e${n + 3 + k},qcomment:reference:c0-e${n + k + 4},qid:reference:c0-e${n + k + 5},qscore:reference:c0-e${n + k + 6}}\n`
        data1 += `c0-e${n + 1}=boolean:true\n`
        let reference = `c0-e${n + 2}=Array:[`
        for (let j = 0; j < new_list[i].length; j++) {
            reference += `reference:c0-e${n + 3 + 3 * j},`
        }
        reference = reference.substring(0, reference.length - 1)
        reference += ']\n'
        data1 += reference
        let total_score = 0
        for (let j = 0; j < new_list[i].length; j++) {
            data1 += `c0-e${n + 3 + 3 * j}=Object_Object:{jid:reference:c0-e${n + 4 + 3 * j},jscore:reference:c0-e${n + 5 + 3 * j}}\n`
            data1 += `c0-e${n + 4 + 3 * j}=string:${new_list[i][j][0]}\n`
            data1 += `c0-e${n + 5 + 3 * j}=string:${new_list[i][j][1]}\n`
            total_score += parseInt(new_list[i][j][1])
        }
        data1 += `c0-e${n + k + 3}=null:null\n`
        data1 += `c0-e${n + k + 4}=string:${comment}\n`
        data1 += `c0-e${n + k + 5}=number:${qid_list[i]}\n`
        data1 += `c0-e${n + k + 6}=number:${total_score}\n`
        n = n + k + 7
    }
    e3 = e3.substring(0, e3.length - 1)
    e3 += ']\n'
    let data_end = data0 + data1 + e3
    data_end += `c0-param0=Object_Object:{evaluateId:reference:c0-e1,testId:reference:c0-e2,qitems:reference:c0-e3}
c0-param1=boolean:false
batchId=${Date.now()}`
    $.ajax({
        url: 'https://www.icourse163.org/dwr/call/plaincall/MocEvaluateBean.submitSubmissionEvaluate.dwr',
        type: 'post',
        contentType: 'text/plain',
        async: false,
        data: data_end,
    })
}

function other_evaluate(tid, qid_list, new_list, comment) {
    let user_id = global_data.webUser.id
    $.ajax({
        url: 'https://www.icourse163.org/dwr/call/plaincall/MocEvaluateBean.startOneSubmissionEvaluate.dwr',
        type: 'post',
        async: false,
        data: {
            'callCount': '1',
            'scriptSessionId': '${scriptSessionId}190',
            'c0-scriptName': 'MocEvaluateBean',
            'c0-methodName': 'startOneSubmissionEvaluate',
            'c0-id': '0',
            'c0-param0': 'string:' + tid,
            'c0-param1': 'string:' + user_id,
            'batchId': Date.now()
        },
        success: function (msg) {
            let eid = msg.match(/evaluateId=(.*?);/g)[0].match(/\d+/g)[0]
            evaluate(eid, tid, qid_list, new_list, comment)
        }
    })
}

function self_evaluate(tid, aid, qid_list, new_list, comment) {
    let user_id = global_data.webUser.id
    $.ajax({
        url: 'https://www.icourse163.org/dwr/call/plaincall/MocEvaluateBean.getEvaluateDetail.dwr',
        type: 'post',
        async: false,
        data: {
            'callCount': '1',
            'scriptSessionId': '\$\{scriptSessionId\}190',
            'c0-scriptName': 'MocEvaluateBean',
            'c0-methodName': 'getEvaluateDetail',
            'c0-id': '0',
            'c0-param0': 'string:' + tid,
            'c0-param1': 'string:' + user_id,
            'batchId': Date.now()
        },
        success: function (msg) {
            let eid_self = msg.match(`.answerformId=${aid};.*?evaluateId=(.*?);`)
            let eid = eid_self[1]
            evaluate(eid, tid, qid_list, new_list, comment)
        }
    })
}


function start_evaluate() {
    let confirm = window.confirm('确认开始互评？')
    if (!confirm) {
        show_msg('已取消')
        throw new Error('已取消')
    }
    show_msg('开始互评，请等待...')
    let num = $("#evaluate_num").val()
    let comment = $("#comment").val()
    let _url = unsafeWindow.location.href
    let tid = _url.match(/\?id=(\d+)/)[1]
    let userId = global_data.webUser.id
    $.ajax({
        url: 'https://www.icourse163.org/dwr/call/plaincall/MocQuizBean.getHomeworkInfo.dwr',
        type: 'post',
        async: false,
        data: {
            'callCount': '1',
            'scriptSessionId': '\$\{scriptSessionId\}190',
            'c0-scriptName': 'MocQuizBean',
            'c0-methodName': 'getHomeworkInfo',
            'c0-id': '0',
            'c0-param0': 'string:' + tid,
            'c0-param1': 'null:null',
            'c0-param2': 'boolean:false',
            'batchId': Date.now()
        },
        success: function (msg) {
            let aid = msg.match(/(?=aid:)(.*?)(?=,)/g)
            aid = aid[0].replace('aid:', '')
            $.ajax({
                url: 'https://www.icourse163.org/dwr/call/plaincall/MocQuizBean.getHomeworkPaperDto.dwr',
                type: 'post',
                async: false,
                data: {
                    "callCount": "1",
                    "scriptSessionId": "${scriptSessionId}190",
                    "c0-scriptName": "MocQuizBean",
                    "c0-methodName": "getHomeworkPaperDto",
                    "c0-id": "0",
                    "c0-param0": "string:" + tid,
                    "c0-param1": "string:" + userId,
                    "c0-param2": "boolean:false",
                    "c0-param3": "number:2",
                    "c0-param4": "string:" + aid,
                    "batchId": Date.now()
                },
                success: function (msg) {
                    let ids_scores = []
                    let new_list = [], qid_list = []
                    let ids = []
                    const split_str = 'gmtModified'
                    msg = msg.split(split_str)
                    for (let i = 1; i < msg.length; i++) {
                        ids.push(msg[i].match(/.id=(.*?);.*.maxScore=(.*?);/g))
                        qid_list.push(msg[i].match(/.id=(.*?);/)[1])
                    }
                    for (let n = 0; n < ids.length; n++) {
                        for (let i = 0; i < ids[n].length; i++) {
                            let id_score = ids[n][i].match(/\d+/g)
                            let id = id_score[0]
                            let score = id_score[2]
                            ids_scores.push([id, score])
                        }
                        new_list.push(ids_scores)
                        ids_scores = []
                    }

                    self_evaluate(tid, aid, qid_list, new_list, comment)
                    for (let i = 0; i < num; i++) {
                        other_evaluate(tid, qid_list, new_list, comment)
                    }
                    show_msg('互评完成')
                    //刷新网页
                    setTimeout(function () {
                        unsafeWindow.history.back()
                    }, 1000)
                }
            })
        }
    })
}


function copyToClipboard(text) {
    let textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    textArea.remove();
}


let keysPressed = {};
document.addEventListener('keydown', (event) => {
    keysPressed[event.key] = true;
    if (keysPressed['z'] && keysPressed['1']) {
        keysPressed = {};
        show_answer()
    } else if (keysPressed['z'] && keysPressed['2']) {
        keysPressed = {};
        Swal.fire({
            title: '选择快刷还是慢刷?',
            icon: 'question',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: '快刷(付费)',
            denyButtonText: `挂机刷课(免费)`,
        }).then((result) => {
            if (result.isConfirmed) {
                skip_lesson()
            } else if (result.isDenied) {
                slow_skip_lesson()
            }
        })
    } else if (keysPressed['z'] && keysPressed['3']) {
        const cdkey = GM_getValue('cdkey', '') || ''
        if (cdkey) {
            copyToClipboard(cdkey)
            show_msg('cdkey复制成功');
        } else {
            show_msg('尚未使用过cdkey')
        }
    } else if (keysPressed['Escape']) {
        keysPressed = {};
        $("#floatingWindow")[0].hidden = !$("#floatingWindow")[0].hidden
        if ($("#quickSubmit"))
            $("#quickSubmit")[0].hidden = !$("#quickSubmit")[0].hidden
    }
});

function get_chapter_index(this_node) {
    let parent_node = this_node.parentNode
    let index = -1
    for (let i = 0; i < parent_node.children.length; i++) {
        if (parent_node.children[i].classList.contains('m-learnChapterNormal')) {
            ++index
        }
        if (parent_node.children[i] === this_node) {
            break
        }
    }
    return index
}

function get_lesson_index(this_node) {
    let parent_node = this_node.parentNode
    let chapter_index = get_chapter_index(parent_node.parentNode)
    let index = -1
    for (let i = 0; i < parent_node.children.length; i++) {
        let temp = parent_node.children[i]
        let temp_class_list = temp.classList
        if (temp_class_list.contains('quiz') || temp_class_list.contains('homework')) {
            continue
        }
        if (temp_class_list.contains('u-learnLesson')) {
            ++index
        }
        if (temp === this_node) {
            break
        }
    }
    return [chapter_index, index]
}

function check_vip() {
    return global_data.webUser.lesson_vip === 1;
}

document.addEventListener('keyup', (event) => {
    keysPressed = {};
});

function observe() {
    let targetNode = document.getElementById('courseLearn-inner-box');
    let observer = new MutationObserver(function (mutations) {
        for (let mutation of mutations) {
            mutation.addedNodes.forEach(function (node) {
                //获取node的class
                let node_class_list = node.classList
                if (!node_class_list) {
                    return;
                }
                let node_class = node.className
                if (node_class === 'sourceList') {
                    let [chapter_index, lesson_index] = get_lesson_index(node.parentNode)
                    for (let i = 0; i < node.children.length; i++) {
                        let child = node.children[i]
                        child.classList.add('unit')
                        let tag_name = child.getElementsByTagName('div')[0]
                        // 获取tag_name内容
                        let tag_name_text = tag_name.textContent
                        let temp = document.createElement('button')
                        temp.textContent = '刷此' + tag_name_text
                        temp.style.height = '30px'
                        temp.classList.add('unit_button')
                        temp.onclick = function (event) {
                            event.stopPropagation();
                            if (!check_vip()) {
                                Swal.fire({
                                    icon: 'error',
                                    title: '不是vip',
                                    text: '该功能只对vip开放',
                                })
                                return;
                            }
                            let chapter = global_data.chapter_storage[chapter_index]
                            let lesson = chapter.lessons[lesson_index]
                            let unit = lesson.units[i]
                            let unit_name = unit.name
                            Swal.fire({
                                title: `确定开始刷此${tag_name_text}吗？`,
                                text: unit_name,
                                icon: 'question',
                                showCancelButton: true,
                                confirmButtonColor: '#3085d6',
                                cancelButtonColor: '#d33',
                                confirmButtonText: '确认',
                                cancelButtonText: '取消',
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    let aim_list = []
                                    handle_units([unit], aim_list, {'pass_all': true}).then(() => {
                                        start_pass(aim_list)
                                    })
                                } else {
                                    throw new Error('已取消')
                                }
                            })

                        }
                        child.append(temp)
                    }
                    return;
                }
                if (node_class_list.contains('m-learnChapterNormal') && !node_class_list.contains('exam')) {
                    let this_node = node.children[0]
                    this_node.classList.add('unit')
                    let temp = document.createElement('button')
                    temp.textContent = '刷此章节'
                    temp.style.top = '8px'
                    temp.style.right = '40%'
                    temp.style.background = '#EEE8A9'
                    temp.classList.add('chapter_button')
                    temp.onclick = function (event) {
                        event.stopPropagation();
                        if (!check_vip()) {
                            Swal.fire({
                                icon: 'error',
                                title: '不是vip',
                                text: '该功能只对vip开放',
                            })
                            return;
                        }
                        let index = get_chapter_index(node)
                        let chapter = global_data.chapter_storage[index]
                        let chapter_name = chapter.name
                        Swal.fire({
                            title: '确定开始刷此章节吗？',
                            text: chapter_name,
                            icon: 'question',
                            showCancelButton: true,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: '确认',
                            cancelButtonText: '取消',
                        }).then((result) => {
                            if (result.isConfirmed) {
                                let aim_list = []
                                handle_chapter([chapter], aim_list, {'pass_all': true}).then(
                                    () => {
                                        start_pass(aim_list)
                                    }
                                )
                            } else {
                                throw new Error('已取消')
                            }
                        })
                    }
                    this_node.append(temp)
                    return;
                }
                if (node_class_list.contains('u-learnLesson') && !node_class_list.contains('quiz') && !node_class_list.contains('homework')) {
                    node_class_list.add('lesson')
                    let title_dom = node.getElementsByClassName('j-name name f-fl f-thide')
                    if (title_dom.length === 0) {
                        return
                    } else {
                        title_dom = title_dom[0]
                    }
                    let temp = document.createElement('button')
                    temp.textContent = '刷此单元'
                    temp.style.background = '#FFE9FF'
                    temp.style.right = '50%'
                    temp.classList.add('lesson_button')
                    temp.onclick = function (event) {
                        event.stopPropagation();
                        if (!check_vip()) {
                            Swal.fire({
                                icon: 'error',
                                title: '不是vip',
                                text: '该功能只对vip开放',
                            })
                            return;
                        }
                        let [chapter_index, lesson_index] = get_lesson_index(node)
                        let chapter = global_data.chapter_storage[chapter_index]
                        let lesson = chapter.lessons[lesson_index]
                        Swal.fire({
                            title: '确定开始刷此单元吗？',
                            text: lesson.name,
                            icon: 'question',
                            showCancelButton: true,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: '确认',
                            cancelButtonText: '取消',
                        }).then((result) => {
                            if (result.isConfirmed) {
                                let aim_list = []
                                handle_lession([lesson], aim_list, {'pass_all': true}).then(() => {
                                    start_pass(aim_list)
                                })
                            } else {
                                throw new Error('已取消')
                            }
                        })
                    }
                    title_dom.after(temp)
                    return;
                }
                if (node.textContent.indexOf("作业 批改 ( 剩余") !== -1) {
                    if ($("#evaluation").length !== 0) {
                        return
                    }
                    $(".f-fl.j-hwname").append(`
                        <div class="jd jd2 f-fl f-cb j-jd now" id="evaluation" style="margin-left: 220px;margin-top: 10px;border: 1px solid #6db4fb;font-size: 14px;padding: 9px;">
                        <h3 style="text-align: center">一键互评</h3>
                        <div style="border-bottom: 1px solid #ddd;"><span style="color: #4297FF !important;">份数：</span><input type="number" step="any" style="width:200px;" value="6" id="evaluate_num"></div><br>
                        <div style="border-bottom: 1px solid #ddd;"><span style="color: #4297FF !important;">评语：</span><input type="text" style="width:200px;" value="很好，继续努力！" id="comment"></div>
                        <button style="float:right;margin-top: 10px" class="u-btn f-fr j-submit" id="evaluate">确认</button>
                        </div>
                        `)
                    $("#evaluate").click(function () {
                        start_evaluate()
                    })
                    return;
                }

                if (!$("#floatingWindow")[0].hidden && node_class === 'm-quizDoing' && unsafeWindow.location.href.indexOf('exam') === -1 && node.getElementsByClassName("j-warnTip warnTip f-dn")[0]) {
                    $("#quickSubmit").remove()
                    $(".j-description").append(`
                <button class='_2zscs' style="width: auto;padding: 10px 15px;top:35vh;background: #97ACCF;font-size: 15px;" id="quickSubmit">一键交卷</button>
                `)
                    $("#quickSubmit").click(function () {
                        Swal.fire({
                            title: '确认一键交卷吗？',
                            text: '如果时间充足更推荐显示答案后手动交卷',
                            icon: 'question',
                            showCancelButton: true,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: '确认',
                            cancelButtonText: '取消',
                        }).then((result) => {
                            if (result.isConfirmed) {
                                quickSubmit()
                            }
                        })
                    })
                }

            });
        }
    });

    let config = {attributes: false, childList: true, subtree: true};
    if (unsafeWindow.location.href.indexOf('newExam') === -1)
        observer.observe(targetNode, config);
}