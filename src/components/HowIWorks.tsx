import ArrayCode from "./UI/ArrayCode";
import CodeBlock from "./UI/CodeBlock";

export default function HowIWorks() {
  return (
    <CodeBlock objName="description" type="arr">
      <div
        className="text-code-lime text-md indent-10 p-2 
        flex flex-col gap-1
      max-lg:indent-0 max-lg:text-xs  max-lg:px-10"
      >
        <p>
          {`"웹 접근성, 사용자들의 UI/UX 개선에 관심이 많습니다."`}
          <span className="text-white">,</span>
        </p>
        <p>
          {`"재사용 가능한 컴포넌트 설계에 관심이 많습니다."`}
          <span className="text-white">,</span>
        </p>
        <p>
          {`"문제가 생겨도 그 상황 안에서 일을 진행할 수 있는 방향을 찾습니다."`}
          <span className="text-white">,</span>
        </p>
        <p>
          {`"승부욕과 책임감이 강해 한번 시작한 일은 끝까지 완수합니다."`}
          <span className="text-white">,</span>
        </p>
        <p>
          {`"함께 정한 기한은 반드시 지키려고 노력합니다."`}
          <span className="text-white">,</span>
        </p>
        <p>
          {`"자신에겐 엄격하되 타인에게는 관대합니다."`}
          <span className="text-white">,</span>
        </p>
      </div>
    </CodeBlock>
  );
}
