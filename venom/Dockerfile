FROM golang:1.12-alpine3.9

WORKDIR /go/src/app

RUN apk add --no-cache git
RUN go get github.com/ovh/venom

RUN go get github.com/Shopify/sarama
RUN go get github.com/bsm/sarama-cluster
RUN go get github.com/fullstorydev/grpcurl
RUN go get github.com/garyburd/redigo/redis
RUN go get github.com/go-sql-driver/mysql
RUN go get github.com/golang/protobuf/proto
RUN go get github.com/google/go-github/github
RUN go get github.com/inconshreveable/go-update
RUN go get github.com/jhump/protoreflect/desc
RUN go get github.com/jhump/protoreflect/grpcreflect
RUN go get github.com/lib/pq
RUN go get github.com/mattn/go-shellwords
RUN go get github.com/mattn/go-zglob
RUN go get github.com/ovh/go-ovh/ovh
RUN go get github.com/rubenv/sql-migrate
RUN go get github.com/sclevine/agouti
RUN go get github.com/spf13/cobra
RUN go get github.com/yesnault/go-imap/imap
RUN go get golang.org/x/crypto/ssh
RUN go get google.golang.org/grpc
RUN go get google.golang.org/grpc/credentials
RUN go get google.golang.org/grpc/metadata
RUN go get google.golang.org/grpc/reflection/grpc_reflection_v1alpha
RUN go get google.golang.org/grpc/status
RUN go get gopkg.in/testfixtures.v2

RUN go install github.com/ovh/venom/cli/venom

RUN apk del git

COPY wait-for.sh /wait-for.sh 
RUN chmod +x /wait-for.sh

CMD ["venom", "run", "/tests/*"]